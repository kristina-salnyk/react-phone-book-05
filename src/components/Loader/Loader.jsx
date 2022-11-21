import { Loader as LoaderContainer } from './Loader.styled';
import { RotatingLines } from 'react-loader-spinner';

const Loader = () => {
  return (
    <LoaderContainer>
      <RotatingLines
        strokeColor="rgb(175, 85, 190)"
        strokeWidth="5"
        animationDuration="0.75"
        width="30%"
        visible={true}
      />
    </LoaderContainer>
  );
};

export default Loader;
