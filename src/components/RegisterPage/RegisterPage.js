import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import firebase from '../../firebase';

const RegisterPage = () => {
	const {
		register,
		watch,
		handleSubmit,
		formState: { errors },
	} = useForm();

	const password = useRef();

	const onSubmit = (data) => {
		// let createdUser = await firebase.auth().createUserWithEmailAndPassword();
		console.log('a');
	};

	return (
		<section className="auth-wrapper">
			<h3>Register</h3>
			<form onSubmit={handleSubmit(onSubmit)}>
				<label>e-mail</label>
				<input
					name="email"
					type="email"
					{...register('email', { required: true, pattern: /^\S+@\S+$/i })}
				/>
				{errors.email && <span>This field is required</span>}

				<label>Name</label>
				<input
					name="name"
					{...register('name', { required: true, maxLength: 10 })}
				/>
				{errors.name && errors.name.type === 'required' && (
					<span>This field is required</span>
				)}
				{errors.name && errors.name.type === 'maxLength' && (
					<span>This input exceed maxium length</span>
				)}

				<label>Password</label>
				<input
					name="password"
					type="password"
					ref={password}
					{...register('password', { required: true, minLength: 6 })}
				/>
				{errors.password && errors.password.type === 'required' && (
					<span>This field is required</span>
				)}
				{errors.password && errors.password.type === 'minLength' && (
					<span>Password must have at least 6 char</span>
				)}

				<label>ConfirmPassword</label>
				<input
					name="password_confirm"
					type="password"
					{...register('password_confirm', {
						required: true,
						validate: (value) => value === password.current,
					})}
				/>
				{errors.password_confirm &&
					errors.password_confirm.type === 'required' && (
						<span>This field is required</span>
					)}
				{errors.password_confirm &&
					errors.password_confirm.type !== 'validate' && (
						<span>The password do not match</span>
					)}

				<input type="submit" />
			</form>
			<Link to={'/login'}>
				<button>이미 아이디가 있다면 ?</button>
			</Link>
		</section>
	);
};

export default RegisterPage;
