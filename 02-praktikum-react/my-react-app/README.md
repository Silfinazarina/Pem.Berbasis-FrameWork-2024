# SILFI NAZARINA / TI-3B / 2241720054 (21)

## **JOBSHEET 2 - PRAKTIKUM REACT**

### **1. Persiapan Lingkungan**

1. Pastikan Node.js dan npm sudah terinstal di komputer Anda. 

    <img src="img_prak/01.png">

2. Buat direktori baru untuk proyek React Anda.

    <img src="img_prak/02.png">

3. Inisialisasi proyek React.

    <img src="img_prak/03.png">

4. Jalankan aplikasi React.

    <img src="img_prak/04.png">

    Aplikasi akan terbuka di browser pada alamat http://localhost:3000.

    <img src="img_prak/05.png">

### **2. Membuat Komponen React**

1. Buka file src/App.js di text editor Anda. Ganti kode di dalamnya dengan kode berikut untuk membuat komponen sederhana.

    <img src="img_prak/06.png">

2. Simpan file dan lihat perubahan di browser. Anda akan melihat tampilan sederhana dengan header, konten utama, dan footer.

    <img src="img_prak/07.png">

### **3. Menggunakan JSX untuk Membuat Komponen Dinamis**

1. Buat file baru di direktori src dengan nama Counter.js. 

2. Tambahkan kode berikut untuk membuat komponen Counter yang dinamis.

    <img src="img_prak/08.png">

3. Buka file src/App.js dan impor komponen Counter

    <img src="img_prak/09.png">

4. Tambahkan komponen Counter ke dalam komponen App

    <img src="img_prak/10.png">

5. Simpan file dan lihat perubahan di browser. Anda akan melihat tombol "Tambah" yang dapat meningkatkan hitungan saat diklik.

    <img src="img_prak/11.png">

### **4. Menggunakan Props untuk Mengirim Data**

1. Buat file baru di direktori src dengan nama Greeting.js

2. Tambahkan kode berikut untuk membuat komponen Greeting yang menerima props

    <img src="img_prak/12.png">

3. Buka file src/App.js dan impor komponen Greeting

    <img src="img_prak/13.png">

4. Tambahkan komponen Greeting ke dalam komponen App dan kirim props name

    <img src="img_prak/14.png">

5. Simpan file dan lihat perubahan di browser. Anda akan melihat pesan "Halo, John!" yang ditampilkan oleh komponen Greeting.

    <img src="img_prak/15.png">

### **5.  Menggunakan State untuk Mengelola Data**

1. Buka file src/App.js dan tambahkan kode berikut untuk membuat komponen yang mengelola state

    <img src="img_prak/16.png">


2. Tambahkan komponen Example ke dalam komponen App

    <img src="img_prak/17.png">

3. Simpan file dan lihat perubahan di browser. Anda akan melihat form input yang dapat mengupdate state dan menampilkan data yang dimasukkan

    <img src="img_prak/18.png">

## **TUGAS**

1. Buat komponen baru bernama TodoList yang menampilkan daftar tugas (todo list). Gunakan
state untuk mengelola daftar tugas dan props untuk mengirim data tugas ke komponen anak.

2. Tambahkan fitur untuk menambahkan tugas baru ke dalam daftar menggunakan form input. 

3. Implementasikan fitur untuk menghapus tugas dari daftar. 

Jawab:

- ToDoList.js :

```js
    import React, { useState } from "react";

    const TodoItem = ({ task, index, toggleTask }) => {
    return (
        <div>
        <input 
            type="checkbox" 
            onChange={() => toggleTask(index)}
        />
        {task}
        </div>
    );
    };

    const TodoList = () => {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState("");

    const addTask = (e) => {
        e.preventDefault();
        if (newTask.trim() !== "") {
        setTasks([...tasks, { text: newTask, completed: false }]);
        setNewTask("");
        }
    };

    const toggleTask = (index) => {
        const updatedTasks = [...tasks];
        updatedTasks[index] = { 
        ...updatedTasks[index], 
        completed: !updatedTasks[index].completed 
        };
        setTasks(updatedTasks);
    };

    return (
        <div>
        <h2>Todo List</h2>
        <form onSubmit={addTask}>
            <input
            type="text"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            />
            <button type="submit">Tambah Tugas</button>
        </form>
        <div>
            {tasks.map((task, index) => (
            <TodoItem key={index} index={index} task={task.text} toggleTask={toggleTask} />
            ))}
        </div>
        </div>
    );
    };

    export default TodoList;
```
- Penambahan komponen TodoList ke App.js:

    <img src="img_prak/19.png">

- Output: 

    <img src="img_prak/20.png">