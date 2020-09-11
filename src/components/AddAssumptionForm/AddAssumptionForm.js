import React, { Component } from "react";
import "./AddAssumptionForm.css";
import TagsList from "../TagsList/TagList";
import { v4 as uuidv4 } from "uuid";
import { addAssumptions } from "../../API/axios";
import { withRouter } from "react-router-dom";

var sessionObj = null;

class AddAssumptionForm extends Component {
  constructor() {
    super();
    sessionObj = JSON.parse(sessionStorage.getItem("responseObj"));
    console.log(sessionObj.data._id);
    this.state = {
      title: "",
      description: "",
      detailDescription: "",
      tagInput: "",
      labels: [],
      credits: [
        {
          reactor: sessionObj._id,
          credit: {
            support: true,
            count: 1,
          },
        },
      ],
      owner: sessionObj.data._id,
    };
  }

  handleFormInput = (e) => {
    var { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };
  handleTagInput = (value) => {
    this.setState({
      tagInput: value,
    });
  };
  handleTagAdder = (e) => {
    var { labels, tagInput } = this.state;
    if (e.key === "Enter") {
      e.preventDefault();
      console.log(e.target.value);
      var tagExists = labels.findIndex(
        (tag) => tag.tagValue === e.target.value
      );
      if (tagExists !== -1) {
        return;
      }
      var tagAdded = {
        tagValue: e.target.value,
        tagId: uuidv4(),
      };
      this.setState((prevState) => ({
        labels: [...prevState.labels, tagAdded],
        tagInput: "",
      }));
      console.log(labels);
    }
  };

  handleTagsDelete = (tagId) => {
    this.setState((prevState) => ({
      labels: prevState.labels.filter((tag) => tag.tagId !== tagId),
    }));
  };
  handleAddAssumptionForm = (e) => {
    var {
      title,
      description,
      detailDescription,
      tagInput,
      labels,
      credits,
      owner,
    } = this.state;
    var { history } = this.props;
    e.preventDefault();

    var assumptionObj = {
      title: title,
      description: description,
      detailDescription: detailDescription,
      tagInput: tagInput,
      labels: labels,
      credits: credits,
      owner: owner
    };
    addAssumptions(assumptionObj, () => {
      history.push("/userTimeline");
    });
    console.log(assumptionObj)
  };
  render() {
    var {
      title,
      description,
      detailDescription,
      tagInput,
      labels,
    } = this.state;

    return (
      <div className="assumption-form-container">
        <div className="assumption-form">
          <div className="assumption-form-fields">
            <div className="assumption-form-heading">
              <h1>Add Assumption Form</h1>
            </div>
            <form onSubmit={this.handleAddAssumptionForm}>
              <div className="title flex">
                <label htmlFor="">Title</label>
                <input
                  type="text"
                  name="title"
                  value={title}
                  onChange={this.handleFormInput}
                />
              </div>

              <div className="description flex">
                <label htmlFor="">Description</label>
                <input
                  type="text"
                  name="description"
                  value={description}
                  onChange={this.handleFormInput}
                />
              </div>

              <div className="detailDescription flex">
                <label htmlFor="">detail Description</label>
                <input
                  type="text"
                  name="detailDescription"
                  value={detailDescription}
                  onChange={this.handleFormInput}
                />
              </div>

              <div className="labels flex">
                <label htmlFor="">labels</label>
                <input
                  type="text"
                  name="tagInput"
                  value={tagInput}
                  onChange={(e) => this.handleTagInput(e.target.value)}
                  onKeyPress={this.handleTagAdder}
                  placeholder="Add a tag"
                />
              </div>
              <div className="tagsAdded flex">
                <TagsList
                  labels={labels}
                  handleTagsDelete={this.handleTagsDelete}
                />
              </div>
              <div className="add-form-btn flex">
                <button type="submit" className="flex">
                  Add
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(AddAssumptionForm);
