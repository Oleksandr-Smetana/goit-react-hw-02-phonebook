export default function ContactList({ contacts, onDelete }) {
  return (
    <ol>
      {contacts.map(({ id, name, number }) => (
        <li key={id}>
          <p>
            {name}: {number}
          </p>
          <button id={id} onClick={onDelete}>
            Delete
          </button>
        </li>
      ))}
    </ol>
  );
}

// import { Component } from 'react';

// class ContactList extends Component {
//   render() {
//     return (
//       <ol>
//         {this.props.contacts.map(({ id, name, number }) => (
//           <li key={id}>
//             <p>
//               {name}: {number}
//             </p>
//             <button id={id} onClick={this.props.onDelete}>
//               Delete
//             </button>
//           </li>
//         ))}
//       </ol>
//     );
//   }
// }
// export default ContactList;
