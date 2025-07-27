import styles from './Flag.module.css';

const countries = [
  'AUT',
  'BLR',
  'CAN',
  'CHN',
  'FRA',
  'GER',
  'ITA',
  'NED',
  'NOR',
  'RUS',
  'SUI',
  'SWE',
  'USA',
];

export default function Flag({ code }: { code: string }) {
  const index = countries.indexOf(code);
  const width = 30;
  const height = 17;

  return (
    <div
      className={styles.flag}
      style={{
        backgroundPosition: `0px -${index * height}px`,
        width,
        height,
      }}
      title={code}
      role="img"
      aria-label={code}
    />
  );
}
