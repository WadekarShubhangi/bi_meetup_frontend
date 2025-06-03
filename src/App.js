import "./App.css";
import { Link } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import useFetch from "./useFetch";
import { useState } from "react";

function App() {
  const [mode, setMode] = useState("Both");
  const [searchedValue, setSearchedValue] = useState("");
  const { data, loading, error } = useFetch(
    "https://meetup-backend-mu.vercel.app/events"
  );


  const filteredMode =
    mode === "Both" ? data : data?.filter((event) => event.eventMode === mode);

  const filteredEvents = filteredMode?.filter((event) => {
    const search = searchedValue.toLowerCase();

    const titleMatch = event.title?.toLowerCase().includes(search);

    const tagMatch = event.tags?.some((tag) =>
      tag.toLowerCase().includes(search)
    );

    //  const tagMatchs = event.tags?.filter((tag) =>
    //   tag.toLowerCase().includes(search)
    // ).length > 0;

    return titleMatch || tagMatch;
  });

  return (
    <>
      <Header />
      <main className="container-fluid">
        {/* sub header and search section */}
        <section className="d-flex justify-content-between">
          <div>
            <h1 className="mx-2 heading-text">Meetup Events</h1>
          </div>
          <div className="d-flex align-self-center">
            <form className="d-flex" style={{ height: "30px" }} role="search">
              <div className="input-group flex-nowrap">
                <span className="input-group-text" id="addon-wrapping">
                  <i className="bi bi-search"></i>
                </span>
                <input
                  type="text"
                  className="form-control border border-start-0 px-0 small"
                  placeholder="Search by title and t...."
                  aria-label="Search"
                  aria-describedby="addon-wrapping"
                  onChange={(e) => setSearchedValue(e.target.value)}
                />
              </div>
            </form>
            <select
              className="form-select form-select-sm"
              style={{ height: "30px", marginLeft: "8px", width: "200px" }}
              aria-label="Default select example"
              onChange={(e) => setMode(e.target.value)}
            >
              <option selected>Select Event Type</option>
              <option value="Online">Online</option>
              <option value="Offline">Offline</option>
              <option value="Both">Both</option>
            </select>
          </div>
        </section>

        {/* cards section */}
        <section className="container mb-4">
          <div className="row gx-5">
            {filteredEvents &&
              filteredEvents.map((event) => (
                <div className="col-md-4 col-12 gy-3" key={event._id}>
                  <div className="card border-0 my-2 bg-body-tertiary position-relative shadow-sm">
                    <img
                      src={event.image}
                      className="card-img-top rounded-2"
                      alt={event.title}
                    />
                    <div className="card-body p-0">
                      <div>
                        <small>
                          {event.eventDay} &bull; {event.startTime}
                        </small>
                      </div>
                      <div>
                        <Link
                          to={`/meetupdetails/${event.id}`}
                          className="card-title fw-bold d-block text-decoration-none fs-4"
                        >
                          {event.title}
                        </Link>
                      </div>
                    </div>
                    <div
                      className="position-absolute text-bg-light rounded"
                      style={{ top: "10px", left: "10px", padding: "5px" }}
                    >
                      {event.eventMode} Event
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default App;
