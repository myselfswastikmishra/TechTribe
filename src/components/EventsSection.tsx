
import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { Calendar as CalendarIcon, MapPin, Clock, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { format } from "date-fns";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";

type Event = {
  id: number;
  title: string;
  description: string;
  type: "Workshop" | "Hackathon" | "Networking" | "Seminar" | "Conference";
  startDate: Date;
  endDate: Date;
  location: string;
  image: string;
  capacity: number;
  registered: number;
};

const eventsData: Event[] = [
  {
    id: 1,
    title: "Web Development Bootcamp",
    description: "Learn the fundamentals of web development with HTML, CSS, and JavaScript.",
    type: "Workshop",
    startDate: new Date(2025, 4, 20, 10, 0),
    endDate: new Date(2025, 4, 20, 16, 0),
    location: "K.R. MANGALAM University, Gurugram",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=400&fit=crop&auto=format",
    capacity: 50,
    registered: 35,
  },
  {
    id: 2,
    title: "Tech Innovation Hackathon",
    description: "A 24-hour hackathon to build innovative solutions for real-world problems.",
    type: "Hackathon",
    startDate: new Date(2025, 4, 25, 9, 0),
    endDate: new Date(2025, 4, 26, 9, 0),
    location: "K.R. MANGALAM University, Gurugram",
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&h=400&fit=crop&auto=format",
    capacity: 100,
    registered: 82,
  },
  {
    id: 3,
    title: "Tech Career Fair",
    description: "Connect with leading tech companies and explore job opportunities.",
    type: "Networking",
    startDate: new Date(2025, 5, 5, 11, 0),
    endDate: new Date(2025, 5, 5, 17, 0),
    location: "K.R. MANGALAM University, Gurugram",
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&h=400&fit=crop&auto=format",
    capacity: 200,
    registered: 155,
  },
  {
    id: 4,
    title: "AI & Machine Learning Workshop",
    description: "Introduction to AI concepts and hands-on practice with machine learning models.",
    type: "Workshop",
    startDate: new Date(2025, 5, 10, 10, 0),
    endDate: new Date(2025, 5, 10, 15, 0),
    location: "K.R. MANGALAM University, Gurugram",
    image: "https://images.unsplash.com/photo-1591453089816-0fbb971b454c?w=800&h=400&fit=crop&auto=format",
    capacity: 40,
    registered: 28,
  },
  {
    id: 5,
    title: "Tech Leadership Conference",
    description: "Insights and strategies for leadership in the technology industry.",
    type: "Conference",
    startDate: new Date(2025, 5, 15, 9, 0),
    endDate: new Date(2025, 5, 16, 18, 0),
    location: "K.R. MANGALAM University, Gurugram",
    image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=800&h=400&fit=crop&auto=format",
    capacity: 150,
    registered: 95,
  },
];

export function EventsSection() {
  const [selectedType, setSelectedType] = useState<string>("");
  const [startDate, setStartDate] = useState<Date | undefined>(undefined);
  const [endDate, setEndDate] = useState<Date | undefined>(undefined);
  const [filteredEvents, setFilteredEvents] = useState<Event[]>(eventsData);

  useEffect(() => {
    let filtered = [...eventsData];
    
    if (selectedType) {
      filtered = filtered.filter(event => event.type === selectedType);
    }
    
    if (startDate) {
      filtered = filtered.filter(event => event.startDate >= startDate);
    }
    
    if (endDate) {
      filtered = filtered.filter(event => event.startDate <= endDate);
    }
    
    setFilteredEvents(filtered);
  }, [selectedType, startDate, endDate]);

  const resetFilters = () => {
    setSelectedType("");
    setStartDate(undefined);
    setEndDate(undefined);
  };

  return (
    <section id="events" className="py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Upcoming <span className="text-techtribe-red">Events</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-8">
            Join our community events to learn, network, and collaborate with fellow tech enthusiasts.
          </p>
          
          {/* Event Filters */}
          <div className="flex flex-col md:flex-row gap-4 justify-center mb-8">
            <div className="w-full md:w-auto">
              <Select value={selectedType} onValueChange={setSelectedType}>
                <SelectTrigger className="w-full md:w-[180px]">
                  <SelectValue placeholder="Event Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Types</SelectItem>
                  <SelectItem value="Workshop">Workshop</SelectItem>
                  <SelectItem value="Hackathon">Hackathon</SelectItem>
                  <SelectItem value="Networking">Networking</SelectItem>
                  <SelectItem value="Seminar">Seminar</SelectItem>
                  <SelectItem value="Conference">Conference</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="w-full md:w-auto">
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className={cn(
                      "w-full md:w-[180px] justify-start text-left font-normal",
                      !startDate && "text-muted-foreground"
                    )}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {startDate ? format(startDate, "PP") : <span>Start Date</span>}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={startDate}
                    onSelect={setStartDate}
                    initialFocus
                    className={cn("p-3 pointer-events-auto")}
                  />
                </PopoverContent>
              </Popover>
            </div>
            
            <div className="w-full md:w-auto">
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className={cn(
                      "w-full md:w-[180px] justify-start text-left font-normal",
                      !endDate && "text-muted-foreground"
                    )}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {endDate ? format(endDate, "PP") : <span>End Date</span>}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={endDate}
                    onSelect={setEndDate}
                    initialFocus
                    className={cn("p-3 pointer-events-auto")}
                  />
                </PopoverContent>
              </Popover>
            </div>
            
            <Button
              variant="outline"
              onClick={resetFilters}
              className="w-full md:w-auto"
            >
              Reset Filters
            </Button>
          </div>
        </div>
        
        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredEvents.length > 0 ? (
            filteredEvents.map((event) => (
              <Card key={event.id} className="overflow-hidden border border-gray-200 dark:border-gray-800 hover:shadow-lg transition-shadow">
                <div className="aspect-video relative">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-3 right-3 bg-techtribe-red text-white text-xs py-1 px-2 rounded-full">
                    {event.type}
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="font-bold text-xl mb-2">{event.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                    {event.description}
                  </p>
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-sm">
                      <CalendarIcon className="h-4 w-4 mr-2 text-techtribe-red" />
                      <span>
                        {format(event.startDate, "dd MMM yyyy, h:mm a")} - 
                        {event.startDate.toDateString() === event.endDate.toDateString() 
                          ? format(event.endDate, " h:mm a")
                          : format(event.endDate, " dd MMM yyyy, h:mm a")
                        }
                      </span>
                    </div>
                    <div className="flex items-center text-sm">
                      <MapPin className="h-4 w-4 mr-2 text-techtribe-red" />
                      <span>{event.location}</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <Users className="h-4 w-4 mr-2 text-techtribe-red" />
                      <span>{event.registered} / {event.capacity} registered</span>
                    </div>
                  </div>
                  <Button className="w-full bg-techtribe-red hover:bg-red-700">
                    Register Now
                  </Button>
                </CardContent>
              </Card>
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <p className="text-gray-500 dark:text-gray-400">No events found with the selected filters.</p>
              <Button 
                variant="link" 
                onClick={resetFilters}
                className="text-techtribe-red mt-2"
              >
                Clear filters
              </Button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
