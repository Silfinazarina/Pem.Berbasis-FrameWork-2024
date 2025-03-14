// menampilkan list data users
import Link from 'next/link';

export default function UsersPage({ users }) {
    return (
      <div>
        <h1><strong>Daftar Pengguna</strong></h1>
        <br/>
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              <Link href={`/users/${user.id}`}>{user.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }

export async function getStaticProps() {
  // Ambil data dari API JSONPlaceholder
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const users = await res.json();

  return {
    props: {
      users, // Kirim data ke komponen sebagai props
    },
  };
}


