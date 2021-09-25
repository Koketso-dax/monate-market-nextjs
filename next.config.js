module.exports = {
  webpack: (config) => {
    config.node = {
      
    }
    return config
  },
  env:{
        REACT_APP_CHEC_PUBLIC_KEY:"pk_test_33857ab5245cad41e53faa3c4653f307267e575e88ab3",
        REACT_APP_STRIPE_PUBLIC_KEY:"pk_test_51JXTHcJF7Z4HufV5W8SNZ2HKugj8kTEVyXU1DLVpxxG7qxEzCRVEKdGYjXhyNcFHlvpIDKV4XD4Lx6RJXFKBO4kx000EAT2Hzb"
      }
};
