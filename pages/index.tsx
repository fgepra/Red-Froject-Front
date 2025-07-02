// pages/login.tsx
import { NextPage } from 'next';
import { LockKeyhole, UserRound } from 'lucide-react';
import { useState, FormEvent } from 'react';

const VALID_ID = 'uiseong';
const VALID_PW = 'wda!@*&mom@!*&*wmp';

const LoginPage: NextPage = () => {
  const [id, setId] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string>('');
  const [success, setSuccess] = useState<string>('');

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (id === VALID_ID && password === VALID_PW) {
      console.log('로그인 성공', { id });
      setSuccess('로그인 성공!');
    }else if (id !== VALID_ID && password !== VALID_PW) {
      setError('아이디 및 비밀번호 모두 일치하지 않습니다.');
    } else if (id !== VALID_ID) {
      setError('아이디가 일치하지 않습니다.');
    } else if (password !== VALID_PW) {
      setError('비밀번호가 일치하지 않습니다.');
    }
  };

  return (
    <div className="wrap">
      <form className="card" onSubmit={handleSubmit}>
        <h1>로그인</h1>

        <div className="input-group">
          <UserRound size={20} />
          <input
            type="text"
            placeholder="아이디"
            value={id}
            onChange={e => setId(e.target.value)}
          />
        </div>

        <div className="input-group">
          <LockKeyhole size={20} />
          <input
            type="password"
            placeholder="비밀번호"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
        </div>

        {success && <div className="success">{success}</div>}
        {error && <div className="error">{error}</div>}

        <button type="submit" disabled={!id || !password}>
          로그인
        </button>
      </form>

      <style jsx>{`
        .wrap {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #f2f3f5;
        }
        .card {
          width: 360px;
          padding: 48px 32px;
          background: #fff;
          border-radius: 16px;
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
        }
        .card h1 {
          margin: 0 0 32px;
          font-size: 28px;
          font-weight: 600;
          color: #333;
          text-align: center;
        }
        .input-group {
          display: flex;
          align-items: center;
          padding: 14px 16px;
          background: #fafafa;
          border-radius: 8px;
          margin-bottom: 12px;
        }
        .input-group :global(svg) {
          flex-shrink: 0;
          margin-right: 12px;
          color: #888;
        }
        .input-group input {
          flex: 1;
          border: none;
          outline: none;
          background: transparent;
          font-size: 16px;
          color: #333;
        }
        .input-group input::placeholder {
          color: #aaa;
        }
        .success {
          color: #3FE87F;
          font-size: 14px;
          margin-bottom: 16px;
          text-align: center;
        }
        .error {
          color: #e63946;
          font-size: 14px;
          margin-bottom: 16px;
          text-align: center;
        }
        button {
          width: 100%;
          padding: 14px 0;
          background: #c99cf1;
          border: none;
          border-radius: 8px;
          font-size: 16px;
          font-weight: 500;
          color: #fff;
          cursor: pointer;
          transition: background 0.3s;
        }
        button:disabled {
          background: #e1d6f6;
          cursor: not-allowed;
        }
        button:not(:disabled):hover {
          background: #b68ce0;
        }
      `}</style>
    </div>
  );
};

export default LoginPage;
