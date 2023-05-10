import { TweetWrapper, InputWrapper, TextBox, Other, Button } from "../style";

const EditTweet = ({ valueedit, length, change, editchange }) => {
  return (
    <TweetWrapper>
      <InputWrapper>
        <TextBox
          cols={10}
          rows={4}
          value={valueedit}
          maxLength={250}
          onChange={change}
          placeholder="Tweet about 30 Days of react..."
        ></TextBox>
        <Other>{length > 0 ? length : 0}</Other>
      </InputWrapper>
      <Button bgr={"blue"} type="button" onClick={editchange}>
        Save
      </Button>
      <Button bgr={"lightpink"} type="cancle" onClick={editchange}>
        cancle
      </Button>
    </TweetWrapper>
  );
};
export default EditTweet;
