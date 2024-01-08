import React, { useState } from 'react'
import { FaUser, FaLock, FaEnvelope } from 'react-icons/fa'
import { Link } from 'react-router-dom'


function Authentication() {
	const [userType, setUserType] = useState('student')
	const [formType, setFormType] = useState("login")
	const [isLoading, setIsLoading] = useState(false)


	const [credentials, setCredentials] = useState({
		email: "",
		id: "",
		level: "",
		password: "",


	})



	const handleCredentials = (e) => {

		if (!e.target.name) {

			setCredentials(prevState => ({
				...prevState,
				[e.target.id]: e.target.value,
			}))
		} else {
			setUserType(e.target.id)
		}


	}

	const handleSubmit = (e) => {
		e.preventDefault()
		setIsLoading(true)


		if (formType === 'login') {
			delete credentials.email
			delete credentials.level
		}




	}




	return (
		<div id='auth'>
			<div className="overlay"></div>
			<div className="d-flex justify-content-center align-items-center h-100">
				<div className="card">
					<form className='p-3 pb-1' onSubmit={handleSubmit}>
						<div className='d-flex align-items-center justify-content-center mb-4'>
							<h4>{formType === "login" ? "Log in" : "Sign Up"}</h4>
							{isLoading && <div className="spinner-border primary-color ml-3" role="status"><span className="sr-only">Loading...</span></div>} 
						</div>


						{/* Email Number Field */}
						{
							formType === "signup" && (
								<div className="col-auto">
									<div className="input-group mb-4">
										<div className="input-group-prepend">
											<div className="input-group-text"><FaEnvelope /></div>
										</div>
										<input disabled={isLoading} type="email" className="form-control" id="email" placeholder="Email Address" value={credentials.email} onChange={handleCredentials} required />
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
								<input disabled={isLoading} type="text" className="form-control" id="id" placeholder={userType === "student" ? "Matric No" : "ID Number"} value={credentials.id} onChange={handleCredentials} required />
							</div>
						</div>


						{/* Level Field */}
						{
							(formType === "signup" && userType === "student") && (
								<div className="col-auto">
									<div className="form-group mb-4">
										<select className="form-control" id="level" value={credentials.level} onChange={handleCredentials} required disabled={isLoading}>
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
								<input disabled={isLoading} type="password" className="form-control" id="password" placeholder="Password" value={credentials.password} onChange={handleCredentials} required />
							</div>
						</div>

						{/* Submit Button */}
						<div className="col-auto">
							<button type="submit" disabled={isLoading} className="btn btn-primary mb-2 btn-block">Submit</button>
						</div>

						{/* Forgot password */}
						<nav className="nav forgot-password">
							<Link className="nav-link text-dark" to="#">Forgot Password?</Link>
						</nav>


						{/* Check Boxes for Student and Lecturer */}
						<div className="col-auto d-flex align-items-center justify-content-between mb-3">
							<div className="form-check mb-2">
								<input disabled={isLoading} className="form-check-input" type="checkbox" checked={userType === 'student'} id="student" name="check" onChange={handleCredentials} />
								<label className="form-check-label" htmlFor="student">
									Student
								</label>
							</div>
							<div className="form-check mb-2">
								<input disabled={isLoading} className="form-check-input" type="checkbox" checked={userType === 'lecturer'} id="lecturer" name='check' onChange={handleCredentials} />
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