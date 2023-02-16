import { useState } from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { selectedState } from '@src/store/selectedState';
import { useMutation } from 'react-query';
import { AxiosResponse } from 'axios';
import { useRouter } from 'next/router';
import { coastState } from '@src/store/coastState';
import { IResponse, ISelectedInfo, ISelectProps } from '@src/types/select';
import SelectAPI from '@src/api/select';
import SEO from '@src/components/common/SEO';
import FirstPage from '@src/components/select/FirstPage';
import SecondPage from '@src/components/select/SecondPage';
import SelectView from '@src/components/select/Views/SelectView';

const Select = () => {
  const router = useRouter();

  const [pageIdx, setPageIdx] = useState<number>(0);

  const setCoastState = useSetRecoilState(coastState);

  const selectedInfo = useRecoilValue<ISelectedInfo>(selectedState);

  const selectedValues: number[] = Object.values(selectedInfo);

  const { mutate: postSelectedMutate } = useMutation((data: ISelectedInfo) => SelectAPI.postSelected(data), {
    onSuccess: (data: AxiosResponse<IResponse>) => {
      setCoastState(data as unknown as string);
      router.push('/loading');
    },
  });

  const pages: JSX.Element[] = [
    <FirstPage key={0} selectedValues={selectedValues} setPageIdx={setPageIdx} />,
    <SecondPage
      key={1}
      selectedInfo={selectedInfo}
      selectedValues={selectedValues}
      postSelectedMutate={postSelectedMutate}
    />,
  ];

  const SelectProps: ISelectProps = {
    pageIdx,
    pages,
  };

  return (
    <>
      <SEO title="질문 선택" />
      <SelectView {...SelectProps} />
    </>
  );
};

export default Select;
