import React, { useState } from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

const Login: React.FC = () => {
	const [loginError, setLoginError] = useState('');

	const handleSubmit = async (values: { email: string; password: string }) => {
		try {
		// TODO: 서버에 로그인 요청 보내기
		const response = await fetch('/api/login', {
			method: 'POST',
			headers: {
			'Content-Type': 'application/json',
			},
			body: JSON.stringify(values),
		});

	  if (response.status === 200) {
		// 로그인 성공
		// TODO: 메인 페이지로 이동
	  } else {
		// 로그인 실패
		const error = await response.json();
		setLoginError(error.message);
	  }
	} catch (error) {
	  console.error(error);
	  setLoginError('서버 오류 발생');
	}
  };

  return (
	<div className="login-page">
	  <Formik
		initialValues={{ email: '', password: '' }}
		validationSchema={Yup.object({
		  email: Yup.string().email('올바른 이메일 주소를 입력하세요').required('이메일 주소를 입력하세요'),
		  password: Yup.string().required('비밀번호를 입력하세요').min(8, '비밀번호는 최소 8자리 이상이어야 합니다'),
		})}
		onSubmit={handleSubmit}
	  >
		<Form>
		  <div className="form-group">
			<label htmlFor="email">이메일 주소</label>
			<Field name="email" type="email" id="email" className="form-control" />
		  </div>
		  <div className="form-group">
			<label htmlFor="password">비밀번호</label>
			<Field name="password" type="password" id="password" className="form-control" />
		  </div>
		  <button type="submit" className="btn btn-primary">로그인</button>
		  {loginError && <div className="error-message">{loginError}</div>}
		</Form>
	  </Formik>
	</div>
  );
};

export default Login;