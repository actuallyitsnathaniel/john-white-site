import pageTransition from "../../util/transitionPage";

const Loading = () => {
  return (
    <div className="flex grow justify-center items-center">
      <h2 className="text-3xl animate-bounce">Loading . . .</h2>
    </div>
  );
};

export default pageTransition(Loading);
