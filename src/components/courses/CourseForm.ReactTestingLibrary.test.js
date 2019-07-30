import React from "react";
import { cleanup, render } from "react-testing-library";
import CourseForm from "./CourseForm";
import { exportAllDeclaration } from "@babel/types";

afterEach(cleanup);

function renderCourseForm(args) {
  const defaultProps = {
    errors: {},
    onSave: () => {},
    onChange: () => {},
    course: {},
    authors: []
  };

  const props = { ...defaultProps, ...args };

  return render(<CourseForm {...props} />);
}

it("should render Add Course Header", () => {
  const { getByText } = renderCourseForm();
  getByText("Add Course");
});

it('should label save button as "Save" when not saving', () => {
  const { getByText } = renderCourseForm();
  getByText("Save");
});

it('should label save button as "Saving..." when saving', () => {
  const { getByText, debug } = renderCourseForm({ saving: true });

  debug();

  getByText("Saving...");
});
