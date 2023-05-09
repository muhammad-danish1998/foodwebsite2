function Pagination({ pagination, pageHandler }) {
  return (
    <div className="my-2">
      <nav aria-label="Page navigation example mt-2">
        <ul className="inline-flex -space-x-px">
          {pagination &&
            pagination.map((value, index) => {
              return (
                <li key={index}>
                  <button
                    onClick={() => pageHandler(value.text)}
                    disabled={value.status === "disable" ? true : false}
                    className={`px-3 py-2 overflow-hidden${
                      value.active === "yes"
                        ? "text-blue-600 bg-blue-50"
                        : "leading-tight text-gray-500 bg-white"
                    } border border-gray-300 hover:enabled:bg-gray-100 hover:enabled:text-gray-700 disabled:opacity-50`}
                  >
                    {value.text}
                  </button>
                </li>
              );
            })}
        </ul>
      </nav>
    </div>
  );
}

export default Pagination;
