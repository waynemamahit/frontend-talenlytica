import { MemoAspectList } from './components/AspectList';
import { MemoStudentList } from './components/StudentList';
import { AppContext } from './context/AppContext';
import useApp from './hooks/useApp';

function App() {
  const { countAspect, students, valueProvider, saveStudents } = useApp();
  return (
    <div>
      <h1 className="text-center text-4xl my-4">
        Aplikasi Penilaian Mahasiswa
      </h1>
      <AppContext.Provider value={valueProvider}>
        {students.length > 0 && (
          <div className="p-6 m-6 overflow-auto">
            <header className="flex lg:justify-end md:justify-end sm:justify-center p-1 mx-6">
              <MemoAspectList
                count={countAspect}
                render={(i) => (
                  <div className="flex-col mx-5 text-center">
                    Aspek <br /> penilaian {i}
                  </div>
                )}
              />
            </header>
            <MemoStudentList data={students} countAspect={countAspect} />
            <span className="flex justify-end">
              <button
                className="text-white transition duration-200 bg-black hover:bg-gray-900 px-2 py-1 mt-6 mx-6"
                onClick={saveStudents}
              >
                Simpan
              </button>
            </span>
          </div>
        )}
      </AppContext.Provider>
    </div>
  );
}

export default App;
