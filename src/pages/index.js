import JobItem from "components/JobItem"

export default function Home() {

  return (
    <>
      <>
        <div className="site-wrap">
          <div className="site-mobile-menu site-navbar-target">
            <div className="site-mobile-menu-header">
              <div className="site-mobile-menu-close mt-3">
                <span className="icon-close2 js-menu-toggle" />
              </div>
            </div>
            <div className="site-mobile-menu-body" />
          </div>{" "}
          {/* .site-mobile-menu */}

          {/* NAVBAR */}

          {/* HOME */}
          <section
            className="home-section section-hero overlay bg-image"
            style={{ backgroundImage: 'url("images/hero_1.jpg")' }}
            id="home-section"
          >
            <div className="container">
              <div className="row align-items-center justify-content-center">
                <div className="col-md-12">
                  <div className="mb-5 text-center">
                    <h1 className="text-white font-weight-bold">
                      The Easiest Way To Get Your Dream Job
                    </h1>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Cupiditate est, consequuntur perferendis.
                    </p>
                  </div>
                  <form method="post" className="search-jobs-form">
                    <div className="row mb-5">
                      <div className="col-12 col-sm-6 col-md-6 col-lg-6 mb-4 mb-lg-0">
                        <input
                          type="text"
                          className="form-control form-control-lg"
                          placeholder="Job title, Company..."
                        />
                      </div>
                      <div className="col-12 col-sm-6 col-md-6 col-lg-6 mb-4 mb-lg-0">
                        <button
                          type="submit"
                          className="btn btn-primary btn-lg btn-block text-white btn-search"
                        >
                          <span className="icon-search icon mr-2" />
                          Search Job
                        </button>
                      </div>
                    </div>
                 </form>
                </div>
              </div>
            </div>
            <a href="#next" className="scroll-button smoothscroll">
              <span className=" icon-keyboard_arrow_down" />
            </a>
          </section>
          <section
            className="py-5 bg-image overlay-primary fixed overlay"
            id="next"
            style={{ backgroundImage: 'url("images/hero_1.jpg")' }}
          >
            <div className="container">
              <div className="row mb-5 justify-content-center">
                <div className="col-md-7 text-center">
                  <h2 className="section-title mb-2 text-white">
                    JobBoard Site Stats
                  </h2>
                  <p className="lead text-white">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
                    unde officiis recusandae sequi excepturi corrupti.
                  </p>
                </div>
              </div>
              <div className="row pb-0 block__19738 section-counter">
                <div className="col-6 col-md-6 col-lg-3 mb-5 mb-lg-0">
                  <div className="d-flex align-items-center justify-content-center mb-2">
                    <strong className="number" data-number={1930}>
                      0
                    </strong>
                  </div>
                  <span className="caption">Candidates</span>
                </div>
                <div className="col-6 col-md-6 col-lg-3 mb-5 mb-lg-0">
                  <div className="d-flex align-items-center justify-content-center mb-2">
                    <strong className="number" data-number={54}>
                      0
                    </strong>
                  </div>
                  <span className="caption">Jobs Posted</span>
                </div>
                <div className="col-6 col-md-6 col-lg-3 mb-5 mb-lg-0">
                  <div className="d-flex align-items-center justify-content-center mb-2">
                    <strong className="number" data-number={120}>
                      0
                    </strong>
                  </div>
                  <span className="caption">Jobs Filled</span>
                </div>
                <div className="col-6 col-md-6 col-lg-3 mb-5 mb-lg-0">
                  <div className="d-flex align-items-center justify-content-center mb-2">
                    <strong className="number" data-number={550}>
                      0
                    </strong>
                  </div>
                  <span className="caption">Companies</span>
                </div>
              </div>
            </div>
          </section>
          <section className="site-section">
            <div className="container">
              <div className="row mb-5 justify-content-center">
                <div className="col-md-7 text-center">
                  <h2 className="section-title mb-2">43,167 Job Listed</h2>
                </div>
              </div>
              <ul className="job-listings mb-5">
                <JobItem />
                <JobItem />
                <JobItem />
                <JobItem />
                <JobItem />
                <JobItem />
                <JobItem />
              </ul>
              <div className="row pagination-wrap">
                <div className="col-md-6 text-center text-md-left mb-4 mb-md-0">
                  <span>Showing 1-7 Of 43,167 Jobs</span>
                </div>
                <div className="col-md-6 text-center text-md-right">
                  <div className="custom-pagination ml-auto">
                    <a href="#" className="prev">
                      Prev
                    </a>
                    <div className="d-inline-block">
                      <a href="#" className="active">
                        1
                      </a>
                      <a href="#">2</a>
                      <a href="#">3</a>
                      <a href="#">4</a>
                    </div>
                    <a href="#" className="next">
                      Next
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>
      
        </div>
      </>
    </>

  )
}
