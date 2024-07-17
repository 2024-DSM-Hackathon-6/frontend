import RequestStatus from "../../components/requestStatus";

const Test = () => {
  return (
    <>
      <RequestStatus type="mRequest" />
      <RequestStatus type="inquiry" />
    </>
  )
}

export default Test;