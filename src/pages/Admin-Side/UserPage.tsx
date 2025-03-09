import { useState } from "react";
import { FaEdit, FaSearch, FaTrashAlt,} from "react-icons/fa"; 
import Sidebar from "../../components/Sidebar";
import Header from "../../components/Header";


const UserPage = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [isModalOpen, setIsModalOpen] = useState(false);  
    const [newUser, setNewUser] = useState({ name: "", email: "", role: "", contactNumber: "" });
    const [currentPage, setCurrentPage] = useState(1);
    const usersPerPage = 5;

    // Dummy User Data (Replace with API data later)
    const users = [
        { id: 1, name: "John Doe", email: "john@example.com", role: "Admin", contactNumber: "+94 760 574 878" },
        { id: 2, name: "Jane Smith", email: "jane@example.com", role: "User", contactNumber: "+94 770 574 878" },
        { id: 3, name: "Alice Johnson", email: "alice@example.com", role: "Moderator", contactNumber: "+94 780 574 878" },
        { id: 4, name: "Bob Lee", email: "bob@example.com", role: "Admin", contactNumber: "+94 790 574 878" },
        { id: 5, name: "Charlie Brown", email: "charlie@example.com", role: "User", contactNumber: "+94 760 574 878" },
        { id: 6, name: "Diana Gray", email: "diana@example.com", role: "Moderator", contactNumber: "+94 770 574 878" },
        { id: 7, name: "Elena White", email: "elena@example.com", role: "Admin", contactNumber: "+94 780 574 878" },
    ];

    // Filter Users based on Search
    const filteredUsers = users.filter((user) =>
        user.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // Get the users for the current page
    const indexOfLastUser = currentPage * usersPerPage;
    const indexOfFirstUser = indexOfLastUser - usersPerPage;
    const currentUsers = filteredUsers.slice(indexOfFirstUser, indexOfLastUser);

    // Handle form input changes
    const handleInputChange = (e: { target: { name: any; value: any; }; }) => {
        const { name, value } = e.target;
        setNewUser({ ...newUser, [name]: value });
    };

    // Handle form submission (for adding a new user)
    const handleAddUser = () => {
        console.log("New User:", newUser);
        setIsModalOpen(false); 
        setNewUser({ name: "", email: "", role: "", contactNumber: "" });
    };

    // Pagination logic
    const totalPages = Math.ceil(filteredUsers.length / usersPerPage);

    const handlePageChange = (page: number) => {
        if (page >= 1 && page <= totalPages) {
            setCurrentPage(page);
        }
    };

    return (
        <div className="flex">
            <Sidebar />
            <div className="flex-1 p-6 mt-20">
                <Header />

                {/* Search & Add User Section */}
                <div className="flex justify-end items-center p-4 rounded-lg space-x-2">
                    <div className="relative w-1/3">
                        <input
                            type="text"
                            placeholder="Search users"
                            className="border p-2 rounded-md w-full pl-10 focus:outline-none"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                        <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    </div>
                    <button
                        className="bg-black text-white px-4 py-2 rounded-md"
                        onClick={() => setIsModalOpen(true)}
                    >
                        + Add User
                    </button>
                </div>

                {/* User Table */}
                <div className="mt-6 bg-white shadow-md rounded-lg p-4">
                    <table className="w-full border-collapse">
                        <thead>
                            <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                                <th className="py-3 px-6 text-left">Name</th>
                                <th className="py-3 px-6 text-left">Email</th>
                                <th className="py-3 px-6 text-left">Contact Number</th>
                                <th className="py-3 px-6 text-left">Action</th>
                            </tr>
                        </thead>
                        <tbody className="text-gray-700">
                            {currentUsers.length > 0 ? (
                                currentUsers.map((user) => (
                                    <tr key={user.id} className="border-b hover:bg-gray-100">
                                        <td className="py-3 px-6">{user.name}</td>
                                        <td className="py-3 px-6">{user.email}</td>
                                        <td className="py-3 px-6">{user.contactNumber}</td>
                                        <td className="py-3 px-6 flex space-x-4">
                                            <button className="text-blue-500 hover:text-blue-700">
                                                <FaEdit />
                                            </button>
                                            <button className="text-red-500 hover:text-red-700">
                                                <FaTrashAlt />
                                            </button>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan={4} className="text-center py-4 text-gray-500">
                                        No users found.
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>

                    {/* Pagination */}
                    <div className="mt-4 flex justify-center space-x-2">
                        {/* <button
                            onClick={() => handlePageChange(currentPage - 1)}
                            className="px-4 py-2 border rounded-md text-gray-700 hover:bg-gray-100"
                            disabled={currentPage === 1}
                        >
                            Previous
                        </button> */}
                        {[...Array(totalPages)].map((_, index) => (
                            <button
                                key={index}
                                onClick={() => handlePageChange(index + 1)}
                                className={`px-4 py-2 border rounded-md ${currentPage === index + 1 ? 'bg-black text-white' : 'text-gray-700 hover:bg-gray-100'}`}
                            >
                                {index + 1}
                            </button>
                        ))}
                            {/* <button
                                onClick={() => handlePageChange(currentPage + 1)}
                                className="px-4 py-2 border rounded-md text-gray-700 hover:bg-gray-100"
                                disabled={currentPage === totalPages}
                            >
                                Next
                            </button> */}
                    </div>
                </div>
            </div>

            {/* Modal for Add User Form */}
            {isModalOpen && (
                <div className="fixed inset-0 bg-gray-200 bg-opacity-50 backdrop-blur-sm flex items-center justify-center z-50">
                    <div className="bg-white p-6 rounded-lg shadow-lg w-96">
                        <h2 className="text-2xl font-semibold mb-4">Add User</h2>
                        <form onSubmit={(e) => e.preventDefault()}>
                            <div className="mb-4">
                                <label className="block text-gray-700">Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={newUser.name}
                                    onChange={handleInputChange}
                                    className="w-full p-2 border rounded-md"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={newUser.email}
                                    onChange={handleInputChange}
                                    className="w-full p-2 border rounded-md"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700">Contact Number</label>
                                <input
                                    type="text"
                                    name="contactNumber"
                                    value={newUser.contactNumber}
                                    onChange={handleInputChange}
                                    className="w-full p-2 border rounded-md"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700">Role</label>
                                <select
                                    name="role"
                                    value={newUser.role}
                                    onChange={handleInputChange}
                                    className="w-full p-2 border rounded-md"
                                    required
                                >
                                    <option value="">Select Role</option>
                                    <option value="Admin">Admin</option>
                                    <option value="User">User</option>
                                    <option value="Moderator">Moderator</option>
                                </select>
                            </div>
                            <div className="flex justify-end space-x-2">
                                <button
                                    type="button"
                                    className="bg-gray-300 px-4 py-2 rounded-md"
                                    onClick={() => setIsModalOpen(false)}
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    className="bg-black text-white px-4 py-2 rounded-md"
                                    onClick={handleAddUser} 
                                >
                                    Save
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default UserPage;
