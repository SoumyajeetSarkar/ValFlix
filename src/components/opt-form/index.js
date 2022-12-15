import React from "react";
import { Container, Input, Break, Button, Text } from "./styles/opt-form";
import { FaChevronRight } from "react-icons/fa";
import { Link } from "react-router-dom";
export default function OptForm({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

OptForm.Input = function OptFormInput({ ...restProps }) {
  return <Input {...restProps} />;
};

OptForm.Button = function OptFormButton({ children, ...restProps }) {
  return (
    <Link
      to={restProps.route}
      style={{ textDecoration: "none", color: "white" }}
    >
      <Button {...restProps}>
        {children} <FaChevronRight />
      </Button>
    </Link>
  );
};

OptForm.Text = function OptFormText({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>;
};

OptForm.Break = function OptFormBreak({ ...restProps }) {
  return <Break {...restProps} />;
};
