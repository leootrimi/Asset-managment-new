const initialRequests = {
    waiting: [
      {
        id: 'req-001',
        employeeId: '100042',
        fullName: 'Leotrim Halimi',
        department: 'Matrics',
        position: 'iOS Engineer',
        priority: 'Medium',
        equipment: 'Dell XPS 13',
        requestedBy: 'John Doe',
        date: '2025-04-10',
      },
      {
        id: 'req-002',
        employeeId: '100056',
        fullName: 'Arta Gashi',
        department: '91Life',
        position: 'QA Tester',
        priority: 'Low',
        equipment: 'Logitech Mouse',
        requestedBy: 'Jane Smith',
        date: '2025-04-12',
      },
    ],
    inProgress: [
      {
        id: 'req-003',
        employeeId: '100063',
        fullName: 'Drilon Hoxha',
        department: 'Matrics',
        position: 'Backend Developer',
        priority: 'High',
        equipment: 'Jabra Headphones',
        requestedBy: 'IT Dept',
        date: '2025-04-08',
      },
    ],
    approved: [
      {
        id: 'req-004',
        employeeId: '100029',
        fullName: 'Erza Kelmendi',
        department: '91Life',
        position: 'Product Manager',
        priority: 'Medium',
        equipment: 'HP Monitor A6',
        requestedBy: 'Alice Brown',
        date: '2025-04-05',
      },
    ],
    rejected: [
      {
        id: 'req-005',
        employeeId: '100011',
        fullName: 'Arben Krasniqi',
        department: 'Matrics',
        position: 'UI Designer',
        priority: 'Low',
        equipment: 'Apple MacBook Air',
        requestedBy: 'Bob Wilson',
        date: '2025-04-11',
      },
    ],
  };
  
  export default initialRequests