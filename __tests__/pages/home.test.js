import { mount } from "enzyme";
import Home from "../../pages/home";
import TodosList from "../../components/TodosList";

it("has todo list component", done => {
  const wrapper = mount(<Home />);
  setTimeout(() => {
    wrapper.update();
    expect(wrapper.find(TodosList).length).toEqual(1);
    done();
  }, 2000);
});
