import { AppWrap } from "../Wrapper"
import images from "../constants/images"

const Test = () => {
  return (
    <>
      <img src={images.logoBlueIcon} alt="icon" />
    </>
  )
}

export default AppWrap(Test, 'test', 'app__whitebg');