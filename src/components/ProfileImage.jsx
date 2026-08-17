export default function ProfileImage({ copy }) {
  return <div className="profile-card" aria-label={copy.photo}>
    <div className="avatar">
      <img src="/profile.jpeg" alt={copy.photoAlt || copy.photo} onError={(event) => { event.currentTarget.style.display = 'none' }} />
      <span aria-hidden="true">JB</span>
    </div>
    <div className="profile-meta"><span className="status-dot" /> <span>{copy.photo}</span></div>
    <small>{copy.photoHint}</small>
  </div>
}
