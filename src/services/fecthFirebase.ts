/*
import { db } from '../firebaseConfig';
import { getDocs, collection, addDoc, deleteDoc, doc, updateDoc } from "firebase/firestore";

const refDoc = collection(db, 'stringCollection')
// Read
const data = await getDocs(refDoc)
const arrOnlyData = data.docs.map((doc) => ({...doc.data(), id: doc.id}))

// Create
await addDoc(refDoc, {item1: 'item ...', item2: 'item ...'})

// Delete
const item = doc(db, 'stringCollection', id) // id = itemId
await deleteDoc(item)

// update
const item = doc(db, 'stringCollection', id) // id = itemId
await updateDoc(item, {item1: 'new item modfy'})

// userId = auth.currentUser.uid

// Read continus:
  useEffect(() => {
    const q = query(refDoc);
    const unsubscribe = onSnapshot(q, (querySnap) => {
      let todosDB = [];
      querySnap.forEach((el) => {
        todosDB.push({ ...el.data(), id: el.id });
      });
      setTodos(todosDB);
    });
    return () => unsubscribe();
  }, []);
*/

/*
import {
  addDoc, //
  collection, //
  deleteDoc, //
  doc, //
  onSnapshot, //**
  query, //**
  updateDoc, //
} from 'firebase/firestore';

 await addDoc(collection(db, 'todos'), { // create
      text: todo.trim(),
      completed: false,
    });

        await updateDoc(doc(db, 'todos', id), { // update
      text,
      completed,
    });
  const deleteTodo = async (id) => { // delete
    await deleteDoc(doc(db, 'todos', id));
  };

*/
