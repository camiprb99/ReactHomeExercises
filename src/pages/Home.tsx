import { useSelector } from "react-redux";
import { Input } from "../components/Input/Input";
import { getUsers } from "../components/slices/selectors";
import { PageWrapper } from "./styles";
import Slideshow from "../components/Slideshow/Slideshow";

export const Home = () => {
  const users = useSelector(getUsers);

  return (
    <PageWrapper>
      <Input />
      <Slideshow />
    </PageWrapper>
  );
};
