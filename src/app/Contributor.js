

const Contributor = ({ name }) => {
  // Function to get the initials from the name
  const getInitials = (name) => {
    const nameArray = name.split(' ');
    const initials = nameArray.map(n => n[0].toUpperCase()).join('');
    return initials;
  };

  return (
    <div className="flex items-center space-x-4 shadow-md w-4/5 h-auto p-2">
      <div className="flex items-center justify-center w-10 h-10 bg-blue-500 text-white rounded-full">
        {getInitials(name)}
      </div>
      <span className="text-gray-700 font-medium">{name}</span>
    </div>
  );
};

export default Contributor;
