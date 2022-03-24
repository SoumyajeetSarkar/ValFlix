export default function selectionFilter({ series, films } = []) {
    return {
      popular: [
        { title: 'Today', data: series?.filter((item) => item.genre === 'Today') },
        { title: 'Streams', data: series?.filter((item) => item.genre === 'streamclips') },
        { title: 'Stream Fails', data: series?.filter((item) => item.genre === 'streamfails') },
        { title: 'Official Valorant', data: series?.filter((item) => item.genre === 'official') },
        { title: 'Best of Agents', data: series?.filter((item) => item.genre === 'agents') },
      ],
      tournaments: [
        { title: 'VCT NA', data: films?.filter((item) => item.genre === 'na') },
        { title: 'VCT EMEA', data: films?.filter((item) => item.genre === 'emea') },
        { title: 'VCT APAC', data: films?.filter((item) => item.genre === 'apac') },
        { title: 'VCT Korea', data: films?.filter((item) => item.genre === 'korea') },
        { title: 'VCT Brazil', data: films?.filter((item) => item.genre === 'brazil') },
      ],
    };
  }