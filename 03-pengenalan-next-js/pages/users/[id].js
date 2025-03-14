// menampilkan data salah satu user menggunakan dinamis route

export async function getStaticPaths() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const users = await res.json();

  const paths = users.map((user) => ({
    params: { id: user.id.toString() },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`);
  const user = await res.json();

  return { props: { user } };
}

export default function UserDetail({ user }) {
  return (
    <div>
      <h3>{user.name} ({user.username})</h3>
      <br/>
      <p><strong>Username:</strong> {user.username}</p>
      <p><strong>Email:</strong> {user.email}</p>
      <br/>
      <h2><strong>Address</strong></h2>
      <p>{user.address.street}, {user.address.suite}</p>
      <p>{user.address.city}, {user.address.zipcode}</p>
      <br/>
      <p><strong>Phone:</strong> {user.phone}</p>
      <p><strong>Website:</strong> {user.website}</p>
      <br/>
      <h2><strong>Company</strong></h2>
      <p><strong>Name:</strong> {user.company.name}</p>
      <p><strong>Motto:</strong> {user.company.catchPhrase}</p>
    </div>
  );
}
