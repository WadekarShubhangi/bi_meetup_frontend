import Header from "../components/Header";
import Footer from "../components/Footer";
import useFetch from "../useFetch";
import { useParams } from "react-router-dom";

const MeetupDetails = () => {
  const eventId = useParams();
  const { data, loading, error } = useFetch(
    "https://meetup-backend-mu.vercel.app/events"
  );
console.log(eventId)
  const selectedData = data?.find((event) => event.id == eventId.eventId);
  console.log(selectedData);
  return (
    <>
      <Header />
      <div className="container">
        <div className="row py-3">
          {/* left section */}
          <section className=" col-lg-8 col-md-6 col-12">
            {/* heading */}
            <h1 className="fs-2 fw-bold">{selectedData?.title}</h1>
            {/* hosting */}
            <div className="my-2">
              <small className="d-block m-0">Hosted By:</small>
              <small className="fw-bold d-block mb-4">
                {selectedData?.hostedBy}
              </small>
            </div>
            {/* img */}
            <div className="">
              <img
                src={selectedData?.image}
                alt={selectedData?.title}
                className="object-fit-cover img-fluid"
              />
            </div>
            {/* details */}
            <div className="my-3">
              <h4 className="fw-bold">Details: </h4>
              <p>{selectedData?.details}</p>
            </div>
            {/* additional info */}
            <div>
              <h4 className="fw-bold">Additional Information: </h4>
              {selectedData?.additionalInfo &&
                Object.entries(selectedData.additionalInfo).map(
                  ([key, value]) => (
                    <p key={key}>
                      <strong>{key}:</strong> {value}
                    </p>
                  )
                )}
            </div>
            {/* tags */}
            <div className="my-3">
              <h4 className="fw-bold">Event Tags:</h4>
              {selectedData?.tags.map((tag) => (
                <button className="btn btn-danger me-3">{tag}</button>
              ))}
            </div>
          </section>

          {/* right section */}
          <section className=" col-lg-4 col-md-6 col-12">
            {/*  more info card */}
            <div className="my-3 shadow p-3 bg-body-tertiary rounded">
              <div className="">
                <div className="d-flex align-items-center my-3">
                  <span id="addon-wrapping" className="d-block me-3">
                    <i className="bi bi-clock-history"></i>
                  </span>
                  <small>
                    {selectedData?.eventDay} at {selectedData?.startTime} to{" "}
                    <br />
                    {selectedData?.eventDay} at {selectedData?.endTime}
                    <br />
                  </small>
                </div>
                <div className="d-flex align-items-center my-3 py-2">
                  <span id="addon-wrapping" className="d-block me-3">
                    <i className="bi bi-geo-alt"></i>
                  </span>
                  <small>
                    {selectedData?.location?.split(",")[0]}
                    <br />
                    {selectedData?.location?.split(",").slice(1).join(",")}
                  </small>
                </div>
                <div className="d-flex  align-items-center my-3">
                  <span id="addon-wrapping" className="d-block me-3">
                    <i className="bi bi-currency-rupee"></i>
                  </span>
                  <small>{selectedData?.price}</small>
                </div>
              </div>
            </div>

            {/* speakers card */}
            <div className="mt-5">
              <h4 className="fw-bold mb-3">
                {" "}
                Speakers: ({selectedData?.speakers.length}){" "}
              </h4>

              <div className="row">
                {selectedData?.speakers.map((speaker) => (
                  <div className="col-md-6">
                    <div className="shadow p-3 mb-5 bg-body-tertiary rounded text-center py-3">
                      <img
                        src="https://media.istockphoto.com/id/1459178010/photo/fashion-industry-black-woman-and-designer-portrait-of-clothing-tailor-with-business-vision.jpg?s=1024x1024&w=is&k=20&c=dTTKGF31JvCEfYDIL90OT2d0OVgZ5jLtFwFSK7TwNUs="
                        className="rounded-circle img-fluid object-fit-cover"
                        style={{ width: "80px", height: "80px" }}
                        alt={speaker.name}
                      />
                      <div className="text-center">
                        <p className="m-0 fw-bold">
                          <strong>{speaker.name}</strong>
                        </p>
                        <p className="m-0 text-muted">{speaker.title}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* disabled button */}
            <div className="text-center">
              <button className="btn btn-danger py-1 px-5">RSVP</button>
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default MeetupDetails;
