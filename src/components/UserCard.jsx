import React from 'react'
import "./styles/UserCard.css"

const UserCard = ({user, deleteUser, setUpdatingUser, handleClickShowModal}) => {
  
  const handleClickEdit = () => {
    setUpdatingUser(user)
    handleClickShowModal()

  }
  return (
    <article className='userCard' key={user.id}>
    <h3 className='userCard_name'>{user.first_name} {user.last_name}</h3>
    <ul className='userCard_ul'>
      <li className='userCard_li'><span><i className='bx bx-envelope icon'></i>Email:</span> {user.email}</li>
      <li className='userCard_li'><span><i className='bx bx-cake icon'></i>Birthday:</span> {user.birthday}</li>
    </ul>
    <footer className='userCardButton'>
      <button className='userCardButton_btn' onClick={() =>deleteUser(user.id)}><i className='bx bx-trash'></i></button>
      <button className='userCardButton_btn2' onClick={handleClickEdit}><i className='bx bx-edit' ></i></button>
    </footer>
  </article>
  )
}

export default UserCard