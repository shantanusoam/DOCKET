function DocketForm({ suppliers, onCreateDocket }) {
    const [formData, setFormData] = useState({
      name: '',
      startTime: '',
      endTime: '',
      hoursWorked: '',
      ratePerHour: '',
      supplier: '',
      purchaseOrder: '',
      description: '',
    });
  
    const handleSubmit = (e) => {
      e.preventDefault();
      onCreateDocket(formData);
      // Reset form data
      setFormData({
        name: '',
        startTime: '',
        endTime: '',
        hoursWorked: '',
        ratePerHour: '',
        supplier: '',
        purchaseOrder: '',
        description: '',
      });
    };
  
    // Form JSX code...
  }
  function DocketList({ dockets }) {
    // Docket list JSX code...
  }