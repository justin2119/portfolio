export default function ProfileImage({ copy }) {
  return <div className="profile-card" aria-label={copy.photo}>
    <div className="avatar" role="img" aria-label={copy.photo}><span>JB</span></div>
    <div className="profile-meta"><span className="status-dot" /> <span>{copy.photo}</span></div>
    <small>{copy.photoHint}</small>
  </div>
}
