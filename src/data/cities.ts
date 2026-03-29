export interface City {
  name: string;
  slug: string;
  state: string;
  region: "north" | "south" | "east" | "west" | "central";
  /** Price adjustment factor relative to base (1.0 = no change, 1.005 = +0.5%) */
  adjustment: number;
  /** Nearby cities for cross-linking */
  nearby: string[];
  /** Population tier for sorting */
  tier: 1 | 2 | 3;
}

export const cities: City[] = [
  // Tier 1 - Major Metros
  { name: "Chennai", slug: "chennai", state: "Tamil Nadu", region: "south", adjustment: 0.997, nearby: ["coimbatore", "madurai", "bangalore", "vellore", "trichy"], tier: 1 },
  { name: "Mumbai", slug: "mumbai", state: "Maharashtra", region: "west", adjustment: 1.000, nearby: ["pune", "nashik", "thane", "navi-mumbai", "nagpur"], tier: 1 },
  { name: "Delhi", slug: "delhi", state: "Delhi", region: "north", adjustment: 1.003, nearby: ["noida", "gurgaon", "faridabad", "ghaziabad", "meerut"], tier: 1 },
  { name: "Bangalore", slug: "bangalore", state: "Karnataka", region: "south", adjustment: 1.001, nearby: ["mysore", "mangalore", "chennai", "hyderabad", "hubli"], tier: 1 },
  { name: "Hyderabad", slug: "hyderabad", state: "Telangana", region: "south", adjustment: 1.002, nearby: ["bangalore", "vijayawada", "visakhapatnam", "warangal", "nizamabad"], tier: 1 },
  { name: "Kolkata", slug: "kolkata", state: "West Bengal", region: "east", adjustment: 1.004, nearby: ["howrah", "siliguri", "asansol", "durgapur", "bhubaneswar"], tier: 1 },

  // Tier 2 - Major Cities
  { name: "Pune", slug: "pune", state: "Maharashtra", region: "west", adjustment: 1.001, nearby: ["mumbai", "nashik", "nagpur", "aurangabad", "kolhapur"], tier: 2 },
  { name: "Ahmedabad", slug: "ahmedabad", state: "Gujarat", region: "west", adjustment: 1.002, nearby: ["surat", "rajkot", "vadodara", "gandhinagar", "jamnagar"], tier: 2 },
  { name: "Jaipur", slug: "jaipur", state: "Rajasthan", region: "north", adjustment: 1.003, nearby: ["jodhpur", "udaipur", "ajmer", "kota", "delhi"], tier: 2 },
  { name: "Lucknow", slug: "lucknow", state: "Uttar Pradesh", region: "north", adjustment: 1.004, nearby: ["kanpur", "varanasi", "agra", "allahabad", "meerut"], tier: 2 },
  { name: "Coimbatore", slug: "coimbatore", state: "Tamil Nadu", region: "south", adjustment: 0.998, nearby: ["chennai", "madurai", "trichy", "salem", "erode"], tier: 2 },
  { name: "Kochi", slug: "kochi", state: "Kerala", region: "south", adjustment: 0.999, nearby: ["thrissur", "kozhikode", "thiruvananthapuram", "kannur", "alappuzha"], tier: 2 },
  { name: "Surat", slug: "surat", state: "Gujarat", region: "west", adjustment: 1.001, nearby: ["ahmedabad", "vadodara", "rajkot", "mumbai", "nashik"], tier: 2 },
  { name: "Chandigarh", slug: "chandigarh", state: "Chandigarh", region: "north", adjustment: 1.003, nearby: ["ludhiana", "amritsar", "jalandhar", "shimla", "delhi"], tier: 2 },
  { name: "Indore", slug: "indore", state: "Madhya Pradesh", region: "central", adjustment: 1.003, nearby: ["bhopal", "ujjain", "gwalior", "jabalpur", "nagpur"], tier: 2 },
  { name: "Bhopal", slug: "bhopal", state: "Madhya Pradesh", region: "central", adjustment: 1.003, nearby: ["indore", "jabalpur", "gwalior", "ujjain", "raipur"], tier: 2 },
  { name: "Patna", slug: "patna", state: "Bihar", region: "east", adjustment: 1.005, nearby: ["ranchi", "varanasi", "kolkata", "lucknow", "gaya"], tier: 2 },
  { name: "Nagpur", slug: "nagpur", state: "Maharashtra", region: "central", adjustment: 1.002, nearby: ["pune", "mumbai", "indore", "raipur", "aurangabad"], tier: 2 },
  { name: "Visakhapatnam", slug: "visakhapatnam", state: "Andhra Pradesh", region: "south", adjustment: 1.002, nearby: ["vijayawada", "hyderabad", "bhubaneswar", "rajahmundry", "kakinada"], tier: 2 },
  { name: "Vijayawada", slug: "vijayawada", state: "Andhra Pradesh", region: "south", adjustment: 1.002, nearby: ["hyderabad", "visakhapatnam", "guntur", "tirupati", "nellore"], tier: 2 },
  { name: "Madurai", slug: "madurai", state: "Tamil Nadu", region: "south", adjustment: 0.998, nearby: ["chennai", "coimbatore", "trichy", "salem", "tirunelveli"], tier: 2 },

  // Tier 3 - Secondary Cities
  { name: "Noida", slug: "noida", state: "Uttar Pradesh", region: "north", adjustment: 1.003, nearby: ["delhi", "gurgaon", "ghaziabad", "faridabad", "meerut"], tier: 3 },
  { name: "Gurgaon", slug: "gurgaon", state: "Haryana", region: "north", adjustment: 1.003, nearby: ["delhi", "noida", "faridabad", "jaipur", "chandigarh"], tier: 3 },
  { name: "Thane", slug: "thane", state: "Maharashtra", region: "west", adjustment: 1.000, nearby: ["mumbai", "navi-mumbai", "pune", "nashik", "kalyan"], tier: 3 },
  { name: "Navi Mumbai", slug: "navi-mumbai", state: "Maharashtra", region: "west", adjustment: 1.000, nearby: ["mumbai", "thane", "pune", "panvel", "kalyan"], tier: 3 },
  { name: "Mysore", slug: "mysore", state: "Karnataka", region: "south", adjustment: 1.001, nearby: ["bangalore", "mangalore", "coimbatore", "hubli", "hassan"], tier: 3 },
  { name: "Mangalore", slug: "mangalore", state: "Karnataka", region: "south", adjustment: 0.999, nearby: ["bangalore", "mysore", "kochi", "hubli", "udupi"], tier: 3 },
  { name: "Trichy", slug: "trichy", state: "Tamil Nadu", region: "south", adjustment: 0.998, nearby: ["chennai", "madurai", "coimbatore", "salem", "thanjavur"], tier: 3 },
  { name: "Salem", slug: "salem", state: "Tamil Nadu", region: "south", adjustment: 0.998, nearby: ["coimbatore", "chennai", "trichy", "erode", "namakkal"], tier: 3 },
  { name: "Thiruvananthapuram", slug: "thiruvananthapuram", state: "Kerala", region: "south", adjustment: 0.999, nearby: ["kochi", "kozhikode", "thrissur", "kollam", "nagercoil"], tier: 3 },
  { name: "Kozhikode", slug: "kozhikode", state: "Kerala", region: "south", adjustment: 0.999, nearby: ["kochi", "thrissur", "kannur", "thiruvananthapuram", "mangalore"], tier: 3 },
  { name: "Thrissur", slug: "thrissur", state: "Kerala", region: "south", adjustment: 0.999, nearby: ["kochi", "kozhikode", "thiruvananthapuram", "palakkad", "malappuram"], tier: 3 },
  { name: "Varanasi", slug: "varanasi", state: "Uttar Pradesh", region: "north", adjustment: 1.004, nearby: ["lucknow", "patna", "allahabad", "kanpur", "gorakhpur"], tier: 3 },
  { name: "Kanpur", slug: "kanpur", state: "Uttar Pradesh", region: "north", adjustment: 1.004, nearby: ["lucknow", "agra", "allahabad", "varanasi", "jhansi"], tier: 3 },
  { name: "Agra", slug: "agra", state: "Uttar Pradesh", region: "north", adjustment: 1.003, nearby: ["delhi", "jaipur", "lucknow", "kanpur", "mathura"], tier: 3 },
  { name: "Ludhiana", slug: "ludhiana", state: "Punjab", region: "north", adjustment: 1.003, nearby: ["chandigarh", "amritsar", "jalandhar", "patiala", "delhi"], tier: 3 },
  { name: "Amritsar", slug: "amritsar", state: "Punjab", region: "north", adjustment: 1.004, nearby: ["ludhiana", "jalandhar", "chandigarh", "delhi", "patiala"], tier: 3 },
  { name: "Nashik", slug: "nashik", state: "Maharashtra", region: "west", adjustment: 1.001, nearby: ["mumbai", "pune", "aurangabad", "nagpur", "surat"], tier: 3 },
  { name: "Vadodara", slug: "vadodara", state: "Gujarat", region: "west", adjustment: 1.002, nearby: ["ahmedabad", "surat", "rajkot", "gandhinagar", "mumbai"], tier: 3 },
  { name: "Rajkot", slug: "rajkot", state: "Gujarat", region: "west", adjustment: 1.002, nearby: ["ahmedabad", "surat", "vadodara", "jamnagar", "bhavnagar"], tier: 3 },
  { name: "Ranchi", slug: "ranchi", state: "Jharkhand", region: "east", adjustment: 1.005, nearby: ["patna", "kolkata", "jamshedpur", "dhanbad", "bokaro"], tier: 3 },
  { name: "Guwahati", slug: "guwahati", state: "Assam", region: "east", adjustment: 1.006, nearby: ["shillong", "siliguri", "dibrugarh", "kolkata", "imphal"], tier: 3 },
  { name: "Bhubaneswar", slug: "bhubaneswar", state: "Odisha", region: "east", adjustment: 1.004, nearby: ["kolkata", "visakhapatnam", "rourkela", "cuttack", "puri"], tier: 3 },
  { name: "Dehradun", slug: "dehradun", state: "Uttarakhand", region: "north", adjustment: 1.004, nearby: ["delhi", "chandigarh", "haridwar", "mussoorie", "rishikesh"], tier: 3 },
  { name: "Raipur", slug: "raipur", state: "Chhattisgarh", region: "central", adjustment: 1.004, nearby: ["nagpur", "bhopal", "bilaspur", "indore", "jabalpur"], tier: 3 },
  { name: "Jodhpur", slug: "jodhpur", state: "Rajasthan", region: "north", adjustment: 1.004, nearby: ["jaipur", "udaipur", "ajmer", "bikaner", "barmer"], tier: 3 },
  { name: "Udaipur", slug: "udaipur", state: "Rajasthan", region: "north", adjustment: 1.004, nearby: ["jaipur", "jodhpur", "ahmedabad", "ajmer", "kota"], tier: 3 },
  { name: "Aurangabad", slug: "aurangabad", state: "Maharashtra", region: "west", adjustment: 1.002, nearby: ["pune", "mumbai", "nashik", "nagpur", "ahmednagar"], tier: 3 },
  { name: "Kolhapur", slug: "kolhapur", state: "Maharashtra", region: "west", adjustment: 1.001, nearby: ["pune", "mumbai", "belgaum", "sangli", "satara"], tier: 3 },
  { name: "Gwalior", slug: "gwalior", state: "Madhya Pradesh", region: "central", adjustment: 1.003, nearby: ["bhopal", "agra", "jhansi", "indore", "jabalpur"], tier: 3 },
  { name: "Jabalpur", slug: "jabalpur", state: "Madhya Pradesh", region: "central", adjustment: 1.003, nearby: ["bhopal", "indore", "nagpur", "raipur", "gwalior"], tier: 3 },
  { name: "Hubli", slug: "hubli", state: "Karnataka", region: "south", adjustment: 1.002, nearby: ["bangalore", "belgaum", "mangalore", "mysore", "goa"], tier: 3 },
  { name: "Belgaum", slug: "belgaum", state: "Karnataka", region: "south", adjustment: 1.002, nearby: ["hubli", "kolhapur", "goa", "pune", "bangalore"], tier: 3 },
  { name: "Tirupati", slug: "tirupati", state: "Andhra Pradesh", region: "south", adjustment: 1.001, nearby: ["chennai", "vijayawada", "bangalore", "nellore", "kadapa"], tier: 3 },
  { name: "Guntur", slug: "guntur", state: "Andhra Pradesh", region: "south", adjustment: 1.002, nearby: ["vijayawada", "hyderabad", "nellore", "ongole", "tirupati"], tier: 3 },
  { name: "Jamshedpur", slug: "jamshedpur", state: "Jharkhand", region: "east", adjustment: 1.005, nearby: ["ranchi", "kolkata", "dhanbad", "bokaro", "patna"], tier: 3 },
  { name: "Siliguri", slug: "siliguri", state: "West Bengal", region: "east", adjustment: 1.005, nearby: ["kolkata", "guwahati", "gangtok", "darjeeling", "jalpaiguri"], tier: 3 },
  { name: "Kannur", slug: "kannur", state: "Kerala", region: "south", adjustment: 0.999, nearby: ["kozhikode", "mangalore", "kochi", "thrissur", "kasaragod"], tier: 3 },
  { name: "Erode", slug: "erode", state: "Tamil Nadu", region: "south", adjustment: 0.998, nearby: ["coimbatore", "salem", "trichy", "chennai", "tirupur"], tier: 3 },
  { name: "Tirunelveli", slug: "tirunelveli", state: "Tamil Nadu", region: "south", adjustment: 0.998, nearby: ["madurai", "nagercoil", "tuticorin", "kochi", "chennai"], tier: 3 },
  { name: "Nagercoil", slug: "nagercoil", state: "Tamil Nadu", region: "south", adjustment: 0.998, nearby: ["thiruvananthapuram", "tirunelveli", "madurai", "kochi", "tuticorin"], tier: 3 },
  { name: "Vellore", slug: "vellore", state: "Tamil Nadu", region: "south", adjustment: 0.998, nearby: ["chennai", "bangalore", "tirupati", "salem", "kanchipuram"], tier: 3 },
  { name: "Meerut", slug: "meerut", state: "Uttar Pradesh", region: "north", adjustment: 1.003, nearby: ["delhi", "noida", "ghaziabad", "muzaffarnagar", "hapur"], tier: 3 },
  { name: "Faridabad", slug: "faridabad", state: "Haryana", region: "north", adjustment: 1.003, nearby: ["delhi", "noida", "gurgaon", "palwal", "mathura"], tier: 3 },
  { name: "Ghaziabad", slug: "ghaziabad", state: "Uttar Pradesh", region: "north", adjustment: 1.003, nearby: ["delhi", "noida", "meerut", "faridabad", "hapur"], tier: 3 },
  { name: "Allahabad", slug: "allahabad", state: "Uttar Pradesh", region: "north", adjustment: 1.004, nearby: ["varanasi", "lucknow", "kanpur", "patna", "mirzapur"], tier: 3 },
  { name: "Jalandhar", slug: "jalandhar", state: "Punjab", region: "north", adjustment: 1.003, nearby: ["ludhiana", "amritsar", "chandigarh", "patiala", "kapurthala"], tier: 3 },
  { name: "Kota", slug: "kota", state: "Rajasthan", region: "north", adjustment: 1.003, nearby: ["jaipur", "udaipur", "ajmer", "bhopal", "gwalior"], tier: 3 },
  { name: "Shimla", slug: "shimla", state: "Himachal Pradesh", region: "north", adjustment: 1.005, nearby: ["chandigarh", "delhi", "dehradun", "manali", "kullu"], tier: 3 },
  { name: "Gorakhpur", slug: "gorakhpur", state: "Uttar Pradesh", region: "north", adjustment: 1.005, nearby: ["varanasi", "lucknow", "patna", "allahabad", "faizabad"], tier: 3 },
  { name: "Goa", slug: "goa", state: "Goa", region: "west", adjustment: 1.000, nearby: ["mumbai", "belgaum", "hubli", "kolhapur", "mangalore"], tier: 3 },
  { name: "Jammu", slug: "jammu", state: "Jammu & Kashmir", region: "north", adjustment: 1.006, nearby: ["srinagar", "chandigarh", "amritsar", "delhi", "shimla"], tier: 3 },
  { name: "Srinagar", slug: "srinagar", state: "Jammu & Kashmir", region: "north", adjustment: 1.006, nearby: ["jammu", "chandigarh", "delhi", "amritsar", "shimla"], tier: 3 },
  { name: "Gandhinagar", slug: "gandhinagar", state: "Gujarat", region: "west", adjustment: 1.002, nearby: ["ahmedabad", "vadodara", "surat", "rajkot", "mehsana"], tier: 3 },
  { name: "Ujjain", slug: "ujjain", state: "Madhya Pradesh", region: "central", adjustment: 1.003, nearby: ["indore", "bhopal", "dewas", "ratlam", "mandsaur"], tier: 3 },
  { name: "Bikaner", slug: "bikaner", state: "Rajasthan", region: "north", adjustment: 1.004, nearby: ["jaipur", "jodhpur", "jaisalmer", "sri-ganganagar", "nagaur"], tier: 3 },
  { name: "Ajmer", slug: "ajmer", state: "Rajasthan", region: "north", adjustment: 1.003, nearby: ["jaipur", "jodhpur", "udaipur", "pushkar", "kota"], tier: 3 },
];

export const topCities = cities.filter((c) => c.tier <= 2);
export const allCitySlugs = cities.map((c) => c.slug);

export function getCityBySlug(slug: string): City | undefined {
  return cities.find((c) => c.slug === slug);
}

export function getNearbyCities(slug: string): City[] {
  const city = getCityBySlug(slug);
  if (!city) return [];
  return city.nearby
    .map((s) => getCityBySlug(s))
    .filter((c): c is City => c !== undefined);
}
