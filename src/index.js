import React, { Component } from "react"
import { Input, Rate, Spin, message, Button } from "antd"
import api from "./Api"

export default class FeedbackForm extends Component {
  static defaultProps = {
    textMaxLength: 5000,
    textPlaceholder: "Details...",
    defaultRating: 5,
    dashboardId: "dashboard-id-here",
    loadingHint: "Loading...",
  }

  constructor(props) {
    super(props)
    this.state = {
      values: {
        rating: props.defaultRating,
        text: "",
      },
      isLoading: false,
    }
  }

  handleChange = (name, value) => {
    if (
      (name === "rating" && (value <= 5 && value >= 1)) ||
      (name === "text" &&
        typeof value === "string" &&
        value.length <= this.props.textMaxLength)
    ) {
      this.setState({
        ...this.state,
        values: {
          ...this.state.values,
          [name]: value,
        },
      })
    } else {
      throw new TypeError(
        "name was of the wrong value or value had the wrong value or type"
      )
    }
  }

  handleSubmit = async () => {
    this.setState({
      ...this.state,
      isLoading: true,
    })
    try {
      await api.request("feedback", {
        method: "post",
        data: {
          ...this.state.values,
          dashboardId: this.props.dashboardId,
        },
      })
      message.success("Success")
      this.setState({
        ...this.state,
        values: {
          rating: this.props.defaultRating,
          text: "",
        },
      })
    } catch (e) {
      console.error(e)
      message.error(e.toString())
    } finally {
      this.setState({
        ...this.state,
        isLoading: false,
      })
    }
  }

  render() {
    return (
      <Spin
        tip={this.props.loadingHint}
        spinning={this.state.isLoading}
        delay={500}
      >
        <Rate
          value={this.state.values.rating}
          onChange={v => {
            this.handleChange("rating", v)
          }}
        />
        <br />
        <Input.TextArea
          rows={4}
          placeholder={this.props.textPlaceholder}
          value={this.state.values.text}
          maxLength={this.props.textMaxLength}
          onChange={e => {
            this.handleChange("text", e.target.value)
          }}
        />
        <br />
        <div>{`${this.state.values.text.length}/${
          this.props.textMaxLength
        }`}</div>
        <Button type="primary" onClick={this.handleSubmit}>
          Submit
        </Button>
      </Spin>
    )
  }
}
