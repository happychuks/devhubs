import { useRouter } from 'next/router';
import Button from '../../../components/Button';

const ProjectDetailsPage = () => {
  const router = useRouter();
  const { id } = router.query;

  // Fetch project details based on id
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Project Details for {id}</h1>
      {/* Display project details here */}
      <div className="mt-4">
        <p className="text-gray-700">Here will be the project description...</p>
        <Button variant="secondary">Back to Projects</Button>
      </div>
    </div>
  );
};

export default ProjectDetailsPage;
