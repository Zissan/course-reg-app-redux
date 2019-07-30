import React from "react";
import renderer from "react-test-renderer";
import { authors, courses } from "../../../tools/mockData";
import CourseForm from "./CourseForm";

it('sets submit button label to "Saving..." when saving is true', () => {
  const tree = renderer.create(
    <CourseForm
      course={courses[0]}
      authors={authors}
      onSave={jest.fn()}
      onChange={jest.fn()}
      errors={{}}
      saving
    />
  );

  expect(tree).toMatchSnapshot();
});
