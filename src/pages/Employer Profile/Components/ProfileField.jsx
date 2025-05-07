
const ProfileField = ({ label, value, name, isEditEnabled, userProfileOnChange, placeholder = '', type = 'text' }) => (
    <div className="sm:col-span-1">
      <dt className="text-sm font-medium text-gray-500">{label}</dt>
      {isEditEnabled ? (
        <input
          type={type}
          name={name}
          id={name}
          value={value}
          placeholder={placeholder}
          onChange={userProfileOnChange}
          className="mt-1 block w-full rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm text-gray-900 shadow-sm placeholder-gray-400 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
      ) : (
        <dd className="mt-1 text-sm text-gray-900">{value || <span className="text-gray-400 italic">Information not provided</span>}</dd>
      )}
    </div>
  );
  
  export default ProfileField