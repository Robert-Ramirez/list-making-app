import React from "react";
import Icon from "@material-ui/core/Icon";
import Button from "../Button/Button";
import { connect } from "react-redux";
import { addCard } from "../../actions/Cards/cardsActions";
import { addList } from "../../actions/Cards/listsActions";
import styled from "styled-components";
import Form from "../Form/Form";
import OpenForm from "../Form/OpenForm";

class Create extends React.PureComponent {
  state = {
    formOpen: false,
    text: ""
  };

  openForm = () => {
    this.setState({
      formOpen: true
    });
  };

  closeForm = e => {
    this.setState({
      formOpen: false
    });
  };

  handleInputChange = e => {
    this.setState({
      text: e.target.value
    });
  };

  handleAddList = () => {
    const { dispatch } = this.props;
    const { text } = this.state;

    if (text) {
      this.setState({
        text: ""
      });
      dispatch(addList(text));
    }

    return;
  };

  handleAddCard = () => {
    const { dispatch, listID } = this.props;
    const { text } = this.state;

    if (text) {
      this.setState({
        text: ""
      });
      dispatch(addCard(listID, text));
    }
  };

  renderOpenForm = () => {
    const { list } = this.props;

    const buttonText = list ? "Add another list" : "Add another card";
    const buttonTextOpacity = list ? 1 : 0.5;
    const buttonTextColor = list ? "white" : "inherit";
    const buttonTextBackground = list ? "rgba(0,0,0,.15)" : "inherit";

    const OpenFormButton = styled.div`
      display: flex;
      align-items: center;
      cursor: pointer;
      border-radius: 3px;
      height: 36px;
      margin-left: 8px;
      width: 300px;
      padding-left: 10px;
      padding-right: 10px;
      opacity: ${buttonTextOpacity};
      color: ${buttonTextColor};
      background-color: ${buttonTextBackground};
    `;

    return (
      <OpenFormButton onClick={this.openForm}>
        <Icon>add</Icon>
        <p style={{ flexShrink: 0 }}>{buttonText}</p>
      </OpenFormButton>
    );
  };

  render() {
    const { text } = this.state;
    const { list } = this.props;
    return this.state.formOpen ? (
      <Form
        text={text}
        onChange={this.handleInputChange}
        closeForm={this.closeForm}
      >
        <Button onClick={list ? this.handleAddList : this.handleAddCard}>
          {list ? "Add List" : "Add Card"}
        </Button>
      </Form>
    ) : (
      <OpenForm list={list} onClick={this.openForm}>
        {list ? "Add another list" : "Add another card"}
      </OpenForm>
    );
  }
}

export default connect()(Create);
