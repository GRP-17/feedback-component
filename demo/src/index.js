import React, { Component } from "react"
import { render } from "react-dom"
import { Select, message } from "antd"
import FeedbackForm from "../../src"
import api from "../../src/Api"

class Demo extends Component {
  state = {
    isLoading: false,
    dashboardList: [],
    dashboardId: "",
  }

  componentDidMount() {
    this.fetchDashboard()
  }

  fetchDashboard = async () => {
    try {
      this.setState({
        isLoading: true,
      })

      const dashboardList = await api
        .request("dashboards")
        .then(res => res._embedded.dashboardList)

      this.setState({
        dashboardList,
      })
    } catch (e) {
      message.error(e.toString())
    } finally {
      this.setState({
        isLoading: false,
      })
    }
  }

  handleDashboardChange = value => {
    this.setState({
      dashboardId: value,
    })
  }

  render() {
    return (
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: '1.5em',
      }}>
        <div style={{ padding: 20, width: '50vw' }}>
          <h1>feedback-component Demo</h1>

          <p>This is a demo website for the feedback-component.</p>

          <p>Select your dashboard:</p>

          <Select
            loading={this.state.isLoading}
            showSearch
            style={{ width: 200 }}
            placeholder="Select a dashboard..."
            onChange={this.handleDashboardChange}
          >
            {this.state.dashboardList.map(d => (
              <Select.Option key={d.id} value={d.id}>
                {d.name}
              </Select.Option>
            ))}
          </Select>

          <p />

          {!!this.state.dashboardId && (
            <div>
              <h2>Feedback form:</h2>
              <FeedbackForm dashboardId={this.state.dashboardId} />
            </div>
          )}
        </div>
      </div>
    )
  }
}

render(<Demo />, document.querySelector("#demo"))
