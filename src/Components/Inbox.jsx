import React from "react";

const messages = [
  {
    id: 1,
    sender: 'John Doe',
    subject: 'Meeting Reminder',
    preview: 'Hey! Just reminding you about the meeting tomorrow at 10 AM.',
    time: '2h ago',
    avatar: 'https://i.pravatar.cc/40?img=1',
  },
  {
    id: 2,
    sender: 'Jane Smith',
    subject: 'Project Update',
    preview: 'The project is moving along well. Attached is the progress report.',
    time: '5h ago',
    avatar: 'https://i.pravatar.cc/40?img=2',
  },
  {
    id: 3,
    sender: 'Mark Johnson',
    subject: 'Invitation',
    preview: 'You are invited to our company’s annual event!',
    time: '1d ago',
    avatar: 'https://i.pravatar.cc/40?img=3',
  },
];

export default function Inbox() {
  // const [selectedMessage, setSelectedMessage] = useState(null);

  return (
    <div className="min-h-screen bg-gray-800 py-8 px-4 md:px-10 text-white">
      <div className="max-w-5xl mx-auto">
        <h1 className="font-bold mb-8 text-center md:text-left text-3xl sm:text-4xl md:text-5xl  text-gray-800 dark:text-white tracking-wide drop-shadow-lg font-serif decoration-blue-500 underline-offset-8 uppercase decoration-4 transform transition-all duration-300 hover:scale-110">Inbox</h1>
        <div className="bg-gray-800 rounded-2xl shadow-lg divide-y">
          {messages.map((message) => (
            <div
              key={message.id}
              className="flex items-center p-4 gap-4 cursor-pointer transform transition-all duration-300 ease-in-out hover:scale-[1.02] hover:bg-gray-700 hover:shadow-xl rounded-2xl"
            >
              <img
                src={message.avatar}
                alt="Avatar"
                className="w-12 h-12 rounded-full object-cover"
              />
              <div className="flex-1 min-w-0">
                <div className="flex justify-between items-center">
                  <h2 className="font-semibold text-lg truncate">{message.sender}</h2>
                  <span className="text-xs text-gray-300 ml-2 whitespace-nowrap">{message.time}</span>
                </div>
                <p className="text-gray-300 font-medium truncate">{message.subject}</p>
                <p className="text-gray-400 text-sm truncate">{message.preview}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}