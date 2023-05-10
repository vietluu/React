import { Form, InputWrapper, Button, Other, TextBox } from "./style";
const StatusBox = ({ isCheck, value, length, change, submit }) => {
  return (
    <Form onSubmit={submit}>
      <InputWrapper>
        <TextBox
          cols={10}
          rows={4}
          value={value}
          maxLength={250}
          onChange={change}
          placeholder="Tweet about 30 Days of react..."
        ></TextBox>
        <Other>{length > 0 ? length : 0}</Other>
      </InputWrapper>
      <Button
        type="submit"
        bgr={!isCheck ? "blue" : "lightblue"}
        disabled={isCheck}
      >
        Add Post
      </Button>
    </Form>
  );
};
export default StatusBox;
