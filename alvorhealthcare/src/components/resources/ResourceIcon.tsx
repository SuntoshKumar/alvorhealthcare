import {
  BookOpen,
  BriefcaseBusiness,
  CalendarDays,
  FileText,
  FlaskConical,
  GraduationCap,
  HeartHandshake,
  MessageCircleQuestion,
  Pill,
  PlayCircle,
  Search,
  ShieldCheck,
  Users,
} from "lucide-react";
import type { ResourceIconName } from "@/data";

const icons = {
  book: BookOpen,
  users: Users,
  flask: FlaskConical,
  graduation: GraduationCap,
  file: FileText,
  shield: ShieldCheck,
  pill: Pill,
  heart: HeartHandshake,
  search: Search,
  calendar: CalendarDays,
  play: PlayCircle,
  briefcase: BriefcaseBusiness,
  message: MessageCircleQuestion,
};

interface ResourceIconProps {
  name: ResourceIconName;
  className?: string;
}

export function ResourceIcon({ name, className }: ResourceIconProps) {
  const Icon = icons[name];
  return <Icon className={className} aria-hidden="true" />;
}
