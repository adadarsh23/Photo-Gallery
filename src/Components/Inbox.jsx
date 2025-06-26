import React, { useEffect, useState } from "react";

export default function Inbox() {
  const [messages, setMessages] = useState([]);

  const subjects = [
    "Meeting Reminder", "Project Update", "Invitation", "New Offer", "Alert", "Your Subscription"
  ];
  const previews = [
    "Hey! Just reminding you about the meeting tomorrow.",
    "The project is going great. See attached report.",
    "You’re invited to our annual event!",
    "Limited-time offer just for you.",
    "Please verify your account activity.",
    "Your subscription is about to expire."
  ];

  // Generate random message
  const generateRandomMessage = (user, index) => ({
    id: index + 1,
    sender: `${user.name.first} ${user.name.last}`,
    subject: subjects[Math.floor(Math.random() * subjects.length)],
    preview: previews[Math.floor(Math.random() * previews.length)],
    time: `${Math.floor(Math.random() * 24)}h ago`,
    avatar: user.picture.thumbnail,
  });

  useEffect(() => {
    const fetchUsers = async () => {
      const res = await fetch("https://randomuser.me/api/?results=3");
      const data = await res.json();
      const randomMessages = data.results.map((user, index) =>
        generateRandomMessage(user, index)
      );
      setMessages(randomMessages);
    };
    fetchUsers();
  }, []);

  return (
    <div className="min-h-screen bg-gray-800 py-8 px-4 md:px-10 text-white">
      <div className="max-w-5xl mx-auto">
        <h1 className="font-bold mb-8 text-center md:text-left text-4xl md:text-5xl text-white tracking-wide drop-shadow-lg font-serif uppercase decoration-blue-500 underline-offset-8 decoration-4 hover:scale-110 transition-transform duration-300">
          Inbox
        </h1>
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
