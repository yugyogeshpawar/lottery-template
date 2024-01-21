import { FaFacebookF, FaGooglePlusG, FaTwitter } from "react-icons/fa";
import Social from "../social/Social";

const SignUp = () => {
  return (
    <div
      className="modal fade"
      id="signupModal"
      tabIndex="2"
      role="dialog"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
        <div className="modal-content">
          <div className="modal-body">
            <div className="account-form-area">
              <button
                type="button"
                className="close-btn"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <i className="las la-times"></i>
              </button>
              <h3 className="title">Open Free Account</h3>
              <div className="account-form-wrapper">
                <form>
                  <div className="form-group">
                    <label>
                      Email <sup>*</sup>
                    </label>
                    <input
                      type="email"
                      name="signup_name"
                      id="signup_name"
                      placeholder="Enter your Email"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label>
                      password <sup>*</sup>
                    </label>
                    <input
                      type="password"
                      name="signup_pass"
                      id="signup_pass"
                      placeholder="password"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label>
                      confirm password <sup>*</sup>
                    </label>
                    <input
                      type="password"
                      name="signup_re-pass"
                      id="signup_re-pass"
                      placeholder="Confirm Password"
                      required
                    />
                  </div>
                  <div className="d-flex flex-wrap mt-2">
                    <div className="custom-checkbox">
                      <input
                        type="checkbox"
                        name="id-2"
                        id="id-2"
                        defaultChecked
                      />
                      <label htmlFor="id-2">I agree to the</label>
                      <span className="checkbox"></span>
                    </div>
                    <a href="#0" className="link ml-1">
                      Terms, Privacy Policy and Fees
                    </a>
                  </div>
                  <div className="form-group text-center mt-5">
                    <button className="cmn-btn">log in</button>
                  </div>
                </form>
                <p className="text-center mt-4">
                  {" "}
                  Already have an account?{" "}
                  <a
                    href="#0"
                    data-bs-toggle="modal"
                    data-bs-target="#loginModal"
                  >
                    Login
                  </a>
                </p>
                <div className="divider">
                  <span>or</span>
                </div>

                {/* social links here */}
                <Social
                  items={[
                    [FaFacebookF, "/"],
                    [FaTwitter, "/"],
                    [FaGooglePlusG, "/"],
                  ]}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
