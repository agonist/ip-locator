type Props = {
  label: string;
  value: string;
};

export const DisplayBox: React.FC<Props> = ({ label, value }) => {
  return (
    <div className="flex flex-col space-y-2">
      <p>{label}</p>
      <p>{value}</p>
    </div>
  );
};
