import React, { Component } from "react";
import { Input, Rate, Spin, message, Button } from "antd";
import api from "../../utils/Api";

class Feedback extends Component {
  TEXT_MAX_LENGTH = 5000;
  initialFormValues = {
    rating: 5,
    text: ""
  };

  constructor(props) {
    super(props);
    this.state = {
      values: this.initialFormValues,
      isLoading: false
    };
  }

  handleChange = (name, value) => {
    if (
      (name === "rating" && (value <= 5 && value >= 1)) ||
      (name === "text" &&
        typeof value === "string" &&
        value.length <= this.TEXT_MAX_LENGTH)
    ) {
      this.setState({
        ...this.state,
        values: {
          ...this.state.values,
          [name]: value
        }
      });
    } else {
      throw new TypeError(
        "name was of the wrong value or value had the wrong value or type"
      );
    }
  };

  handleSubmit = async () => {
    this.setState({
      ...this.state,
      isLoading: true
    });
    try {
      await api.request("feedback", {
        method: "post",
        data: this.state.values
      });
      message.success("Success");
      this.setState({
        ...this.state,
        values: this.initialFormValues
      });
    } catch (e) {
      message.error(e.toString());
    } finally {
      this.setState({
        ...this.state,
        isLoading: false
      });
    }
  };
  render() {
    return (
      <Spin tip="Loading..." spinning={this.state.isLoading} delay={500}>
        <Rate
          value={this.state.values.rating}
          onChange={v => {
            this.handleChange("rating", v);
          }}
        />
        <br />
        <Input.TextArea
          rows={4}
          placeholder="Details..."
          value={this.state.values.text}
          maxLength={this.TEXT_MAX_LENGTH}
          onChange={e => {
            this.handleChange("text", e.target.value);
          }}
        />
        <br />
        <div>{`${this.state.values.text.length}/${this.TEXT_MAX_LENGTH}`}</div>
        <Button type="primary" onClick={this.handleSubmit}>
          Submit
        </Button>
      </Spin>
    );
  }
}

export default Feedback;
