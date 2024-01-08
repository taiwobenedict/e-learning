import React, { useState } from 'react'
import { FaUser, FaLock, FaEnvelope } from 'react-icons/fa'
import { Link } from 'react-router-dom'


function Authentication() {
	const [userType, setUserType] = useState('student')
	const [formType, setFormType] = useState("login")



	const changeUser = (e) => {
		setUserType(e.target.id)
	}


	return (
		<div id='auth'>
			<div className="overlay"></div>
			<div className="d-flex justify-content-center align-items-center h-100">
				<div className="card">
					<form className='p-3 pb-1'>
						<h4 className='text-center mb-4'>{formType === "login" ? "Log in" : "Sign Up"}</h4>


						{/* Email Number Field */}
						{
							formType === "signup" && (
								<div className="col-auto">
									<div className="input-group mb-4">
										<div className="input-group-prepend">
											<div className="input-group-text"><FaEnvelope /></div>
										</div>
										<input type="email" className="form-control" id="email" placeholder="Email Address" />
									</div>
								</div>
							)
						}


						{/* Matric Number Field */}
						<div className="col-auto">
							<div className="input-group mb-4">
								<div className="input-group-prepend">
									<div className="input-group-text"><FaUser /></div>
								</div>
								<input type="text" className="form-control" id={userType === "student" ? "student" : "lecturer"} placeholder={userType === "student" ? "Matric No" : "ID Number"} />
							</div>
						</div>

						{/* Level Field */}
						{
							(formType === "signup"  && userType === "student") && (
								<div className="col-auto">
									<div className="form-group mb-4">
										<select className="form-control" id="level">
											<option>Level</option>
											<option>100</option>
											<option>200</option>
											<option>300</option>
											<option>400</option>
											<option>500</option>
										</select>
									</div>
								</div>

							)
						}


						{/* Password Field */}
						<div className="col-auto">
							<div className="input-group mb-4">
								<div className="input-group-prepend">
									<div className="input-group-text"><FaLock /></div>
								</div>
								<input type="password" className="form-control" id="password" placeholder="Password" />
							</div>
						</div>

						{/* Submit Button */}
						<div className="col-auto">
							<button type="submit" className="btn btn-primary mb-2 btn-block">Submit</button>
						</div>

						{/* Forgot password */}
						<nav className="nav forgot-password">
							<Link className="nav-link text-dark" to="#">Forgot Password?</Link>
						</nav>


						{/* Check Boxes for Student and Lecturer */}
						<div className="col-auto d-flex align-items-center justify-content-between mb-3">
							<div className="form-check mb-2">
								<input className="form-check-input" type="checkbox" checked={userType === 'student'} id="student" onChange={changeUser} />
								<label className="form-check-label" htmlFor="student">
									Student
								</label>
							</div>
							<div className="form-check mb-2">
								<input className="form-check-input" type="checkbox" checked={userType === 'lecturer'} id="lecturer" onChange={changeUser} />
								<label className="form-check-label" htmlFor="lecturer">
									Lecturer
								</label>
							</div>
						</div>

						{
							formType === "login"
								? <p className="no-acct">Do Not Have An Account? <Link className='primary-color' onClick={() => setFormType("signup")}>Sign Up</Link> </p>
								: <p className="no-acct">Have An Account? <Link className='primary-color' onClick={() => setFormType("login")}>Log in</Link> </p>
						}




					</form>
				</div>
			</div>

		</div>
	)
}

export default Authentication