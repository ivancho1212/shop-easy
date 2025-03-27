export default function PostCard({ title, body }: { title: string; body: string }) {
    return (
      <div className="card shadow-sm border-0 rounded-3 h-100">
        <div className="card-body">
          <h5 className="card-title text-primary fw-bold">{title}</h5>
          <p className="card-text text-muted">{body}</p>
        </div>
      </div>
    );
  }
  