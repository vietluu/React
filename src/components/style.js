import styled from "styled-components";

export const Form = styled.form`
  width: 100%;
  display: flex;
  align-items: center;
  margin: 3px auto;
  padding:10px;
`;
export const InputWrapper = styled.div`
  width:85%;
  margin: 0;
  padding:20px 0;
`;
export const Button = styled.button`
  padding: 5px 10px;
  width: 90px;
  height: 40px;
  background-color: ${props =>props.bgr};
  color: #fff;
  margin-left: 17px;
  border-radius: 5px;
  border: none;
  outline: none;
`;
export const TextBox = styled.textarea`
  width:100%;
  resize: none;
  padding: 10px;
  font-size: 1.2rem;
  border-radius: 5px;
  border: none;
  outline: none;
  background-color: rgb(255, 160, 122, 0.2);
  &:hover,
  forcus {
    box-shadow: 0 0 5px 1px lightblue;
  }
  &::-webkit-scrollbar {
    width: 0;
  }
`;
export const Other = styled.p`
  text-align: right;
  margin: 5px;
  font-size: 0.9rem;
  color: lightblue;
`;
export const UserInfo = styled.div`
  display: inline-flex;
  align-items: center;
`;
export const Avatar = styled.span`
  border: 2px solid #8796a2;
  border-radius: 50%;
  color: #8796a2;
  display: inline-block;
  width: 40px;
  height: 40px;
  font-size: 1.4rem;
  text-align: center;
  line-height: 35px;
`;
export const Name = styled.h4`
  font-size: 1.2rem;
  margin: 0 5px;
  font-weight: 500;
`;
export const UserId = styled.span`
  font-size: 0.9rem;
  color: #8796a2;
  margin: 0 5px;
`;
export const Details = styled.div`
  display: flex;
  justify-content: space-between;
  ilign-items: center;
  font-size: 1.3rem;
`;
export const Item = styled.span`
  padding: 0 5px;
  margin: 2px;
  &:hover {
    color: ${(props) => (props.hover ? props.hover : "#007FFF")};
  }
`;
export const TimeStamp = styled.small`
  font-size: 1rem;
  font-weight: 300;
  color: #283747;
`;
export const TweetContext = styled.p`
  color: #525c65;
  line-height: 1.5;
  margin: 10px 0;
  word-break: break-word;
`;
export const TweetWrapper = styled.div`
  border-top: 2px solid rgb(177, 176, 176);
  border-bottom: 2px solid rgb(177, 176, 176);
  padding: 10px;
  margin-top:10px;
`;
export const ItemGroup = styled.div`
  color: #92d0f0;
  & + & {
    color: #697a89;
    
  }
`;
