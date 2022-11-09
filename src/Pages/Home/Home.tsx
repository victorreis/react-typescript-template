import { PageContainer } from '../../App.styles';
import { Typography } from '../../Components/Typography';
import { TestProps } from '../../Config/Tests/Test.types';

export const homeDefaults: Required<TestProps> = {
  testID: 'Home',
};

export const Home: React.FC = (): JSX.Element => {
  return (
    <PageContainer data-testid={homeDefaults.testID}>
      <Typography>Hello world!</Typography>
    </PageContainer>
  );
};
