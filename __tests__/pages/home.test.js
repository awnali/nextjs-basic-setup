import { mount } from "enzyme";
import Posts from "../../pages/index";
import TodosList from "../../components/TodosList";

it("has todo list component", () => {
  const wrapped = mount(<Posts />);
  expect(wrapped.find("h2").text()).toEqual("Posts");
});
